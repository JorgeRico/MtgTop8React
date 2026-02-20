import { useState, useRef } from "react";
import "../module.css";
import Error from "/src/components/Forms/Error";
import { degrees, PDFDocument, StandardFonts } from 'pdf-lib';
import downloadjs from "downloadjs";
import DeckListImage from "/src/assets/images/decklist.png";
import InputForm from "/src/components/Forms/Decklist/Input";
import TextareaForm from "/src/components/Forms/Decklist/Textarea";
import { useTranslation } from 'react-i18next';

function Contact() {
    const [ showButton, setShowButton ]         = useState(true);
    const [ showError, setShowError ]           = useState(false);
    const [ toSend, setToSend ]                 = useState({ name: '', surname: '', event: '', deckName: '', mainboard: [], sideboard: [] });
    const form                                  = useRef();
    const [ line ]                              = useState(18);
    const [ cardGap ]                           = useState(43);
    const [ size ]                              = useState(12);
    const [ totalMainboard, setTotalMainboard ] = useState(0);
    const [ totalSideboard, setTotalSideboard ] = useState(0);
    const [ errorMessage, setErrorMessage ]     = useState(null);
    const [ fontFamily, setFontFamily ]         = useState(null);
    const [ pdfHeight, setPdfHeight ]           = useState(null);
    const [ pdfWidth, setPdfWidth ]             = useState(null);
    const [ rightColum, setRightColum ]         = useState(null);
    const [ leftColum, setLeftColum ]           = useState(null);
    const { t }                                 = useTranslation();

    /**
     * Player info - name and surname
     * @param {*} items 
     */
    const playerName = (items, firstPage) => {
        const xTop = 42;
        firstPage.drawText(items[0], { x: xTop, y: 250, size: size, font: fontFamily, rotate: degrees(90) })
        firstPage.drawText(items[1], { x: xTop, y: 70,  size: size, font: fontFamily, rotate: degrees(90) })
    }

    /**
     * Header info - Event name and Deck name
     * @param {*} items 
     */
    const headerEventDeck = (items, firstPage) => {
        const xMove = 70;
        firstPage.drawText(items[0], { x: rightColum + xMove, y: pdfHeight-95, size: size, font: fontFamily })
        firstPage.drawText(items[1], { x: rightColum + xMove, y: pdfHeight-70, size: size, font: fontFamily })
    }

    /**
     * 
     * @param {*} items 
     */
    const mainDeck = (items, firstPage) => {
        const top       = 214.5;
        const MaindeckY =  pdfHeight / 2 + top
        let total       = 0;

        // Maindeck left
        items.forEach((item, index) => {
            firstPage.drawText(item.num,  { x: leftColum,           y: MaindeckY - (index*line), size: size, font: fontFamily });
            firstPage.drawText(item.card, { x: leftColum + cardGap, y: MaindeckY - (index*line), size: size, font: fontFamily });
            total += parseInt(item.num) ;
        })
        
        setTotalMainboard(total);
        // left column 31
        // right column 11
    }

    /**
     * Get sideboard cards
     * @param {*} items 
     */
    const sideboardDeck = (items, firstPage) => {
        const sideBoardY = pdfHeight / 2 - 38;
        let total        = 0;

        items.forEach((item, index) => {
            firstPage.drawText(item.num,  { x: rightColum,           y: sideBoardY - (index*line), size: size, font: fontFamily });
            firstPage.drawText(item.card, { x: rightColum + cardGap, y: sideBoardY - (index*line), size: size, font: fontFamily });
            total += parseInt(item.num) 
        })

        // max items check
        if (total > 15 ) {
            setShowError(true);
            setErrorMessage(t('errors.decklist.Incorrect sideboard - Maximum 15 cards'));
            setTimeout(() => {setShowButton(true)}, 2000);
            setTimeout(() => {setShowError(false)}, 2000);
            
            throw new Error(t('errors.decklist.Incorrect sideboard - Maximum 15 cards'));
        } else {
            setTotalSideboard(total);
        }
    }

    /**
     * Print mainboard and sideboard cards
     * @param {*} rightColNumX 
     */
    const numberOfCards = (firstPage) => {
        firstPage.drawText(totalMainboard.toString(), { x: rightColum-83, y: 27, size: 18, font: fontFamily })
        firstPage.drawText(totalSideboard.toString(), { x: pdfWidth-70,   y: 81, size: 17, font: fontFamily })
    }

    /**
     * Get cardlist items
     * @param {*} cards 
     * @returns 
     */
    function cardsList(cards) {
        const cardsSplitted = cards.split('\n')

        let items = []
        cardsSplitted.forEach(item => {
            let num  = null;
            let card = null;

            if (item.charAt(1) == ' ') {
                num = item.slice(0,2);
                card = item.slice(2);
            } else if (item.charAt(2) == ' ') {
                num = item.slice(0,3);
                card = item.slice(3);
            } else {
                setShowError(true);
                setErrorMessage(t('errors.decklist.Incorrect form - card incorrect format'));
                setTimeout(() => {setShowButton(true)}, 2000);
                setTimeout(() => {setShowError(false)}, 2000);
                
                throw new Error(t('errors.decklist.Incorrect form - card incorrect format'));
            }

            items.push({ num: num, card: card });
        })

        return items;
    }

    /**
     * Pdf config
     * @param {*} pdfDoc 
     * @param {*} firstPage 
     */
    async function config(pdfDoc, firstPage) {
        // font family
        setFontFamily(await pdfDoc.embedFont(StandardFonts.TimesRoman))
        
        const { width, height } = firstPage.getSize()
        setPdfHeight(height);
        setPdfWidth(width);
        setRightColum(width / 2 + 46)
        setLeftColum(80)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setShowButton(false);

        try {
            // Fetch an existing PDF document
            const url              = 'src/assets/pdf/decklist.pdf'
            const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

            // Load a PDFDocument from the existing PDF bytes
            const pdfDoc    = await PDFDocument.load(existingPdfBytes)
            const pages     = pdfDoc.getPages()
            const firstPage = pages[0]
            config(pdfDoc, firstPage)

            // get info from form
            playerName( [ toSend.name, toSend.surname ], firstPage );
            headerEventDeck( [ toSend.deckName, toSend.event ], firstPage );
            mainDeck( cardsList( toSend.mainboard ), firstPage );
            sideboardDeck( cardsList( toSend.sideboard ), firstPage );
            numberOfCards( firstPage );
            
            // Serialize the PDFDocument to bytes (a Uint8Array)
            const pdfBytes = await pdfDoc.save()

            setShowButton(true);
            // Trigger the browser to download the PDF document
            downloadjs(pdfBytes, "decklist.pdf", "application/pdf");
        } catch(err) {
            // console.log('FAILED...', err);
            setShowError(true);
            setErrorMessage(t('errors.decklist.Incorrect form - fill form correctly'));
            setTimeout(() => {setShowButton(true)}, 2000);
            setTimeout(() => {setShowError(false)}, 2000);
            
            throw new Error(t('errors.decklist.Incorrect form - fill form correctly'));
        };
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>   
            <section className="left w100 mb20">
                <form ref={form} onSubmit={onSubmit} className="left w100 mb40 overflowHidden pointer form decklistForm">
                    <article className="left w100">
                        <InputForm name="name" placeholder={t('forms.decklist.Your name')} label={t('forms.decklist.Name')} value={toSend.name} handleChange={handleChange}></InputForm>
                        <InputForm name="surname" placeholder={t('forms.decklist.Your surname')} label={t('forms.decklist.Surname')} value={toSend.surname} handleChange={handleChange}></InputForm>
                    </article>

                    <article className="left w100">
                        <InputForm name="event" placeholder={t('forms.decklist.Event name')} label={t('forms.decklist.Event name')} value={toSend.event} handleChange={handleChange}></InputForm>
                        <InputForm name="deckName" placeholder={t('forms.decklist.Your Deck name')} label={t('forms.decklist.Deck name')} value={toSend.deckName} handleChange={handleChange}></InputForm>
                    </article>   
                    
                    <article className="left w100">
                        <div className="left mb20 w-350">
                            <TextareaForm name="mainboard" placeholder={t('forms.decklist.Your mainboard cards')} label={t('forms.decklist.Mainboard cards')} value={toSend.mainboard} handleChange={handleChange}></TextareaForm>
                            <TextareaForm name="sideboard" placeholder={t('forms.decklist.Your sideboard cards')} label={t('forms.decklist.Sideboard cards')} value={toSend.sideboard} handleChange={handleChange}></TextareaForm>
                        </div>
                        <div className="left mb20 w-350 mt35 pdf">
                            <img src={DeckListImage} alt={t('alt-tags.decklist pdf - mtg legacy cat')} className="w80 pad radius5 cursorAuto" />
                        </div>
                    </article>
                    
                    {showButton == true &&
                        <div className="left w100">
                            <button className="pointer pad bg-red color-white" type='submit'>{t('forms.decklist.Generate Decklist pdf')}</button>
                        </div>
                    }
                    
                    {showError == true &&
                        <Error message={errorMessage}></Error>
                    }
                </form>
            </section>
        </>
    );
}

export default Contact;