// import React, { useState, useRef } from "react";
// import "./module.css";
import Subtitle from '/src/components/HTag/SubTitle';
// import Success from "/src/components/Contact/Success";
// import Error from "/src/components/Contact/Error";

import { degrees, PDFDocument, StandardFonts } from 'pdf-lib';
import downloadjs from "downloadjs";


function Contact() {
    async function modifyPdf() {    
        // Fetch an existing PDF document
        const url = 'src/assets/pdf/decklist.pdf'
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

        // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes)
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

        // Embed the Helvetica font
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

        // Get the first page of the document
        const pages = pdfDoc.getPages()
        const firstPage = pages[0]

        // Get the width and height of the first page
        const { width, height } = firstPage.getSize()

        const top = 214.5;
        const MaindeckY =  height / 2 + top
        const sideBoardY = height / 2 - 37
        const line = 18;
        const leftColNumX = 77;
        const leftColCardX = 120;
        const rightColNumX = width / 2 + 45;
        const rightColCardX = width / 2 + 88;

        // name
        firstPage.drawText('Name', { x: 43, y: 250, size: 12, font: timesRomanFont, rotate: degrees(90) })
        // surname
        firstPage.drawText('Surname', { x: 43, y: 70, size: 12, font: timesRomanFont, rotate: degrees(90) })
        // deckName
        firstPage.drawText('Boros agro', { x: rightColNumX + 70, y: height-95, size: 12, font: timesRomanFont })
        // event
        firstPage.drawText('Lliga Minoria', { x: rightColNumX + 70, y: height-70, size: 12, font: timesRomanFont })


        // Maindeck
        // TODO: foreach
        firstPage.drawText('12', { x: leftColNumX, y: MaindeckY, size: 12, font: timesRomanFont })
        firstPage.drawText('Maindeck 1', { x: leftColCardX, y: MaindeckY, size: 12, font: timesRomanFont })

        firstPage.drawText(' 2', { x: leftColNumX, y: MaindeckY - line, size: 12, font: timesRomanFont })
        firstPage.drawText('Maindeck 2', { x: leftColCardX, y: MaindeckY - line, size: 12, font: timesRomanFont })
        
        firstPage.drawText(' 3', { x: leftColNumX, y: MaindeckY - 2*line, size: 12, font: timesRomanFont })
        firstPage.drawText('Maindeck 3', { x: leftColCardX, y: MaindeckY - 2*line, size: 12, font: timesRomanFont })
        
        firstPage.drawText(' 4', { x: leftColNumX, y: MaindeckY - 3*line, size: 12, font: timesRomanFont })
        firstPage.drawText('Maindeck 4', { x: leftColCardX, y: MaindeckY - 3*line, size: 12, font: timesRomanFont })

        // hasta el 31
        // mainboard count
        firstPage.drawText('60', { x: rightColNumX-83, y: 27 , size: 18, font: timesRomanFont })
        // 11 de la columna derecha

        // Sideboard
        // TODO: foreach
        firstPage.drawText(' 2', { x: rightColNumX, y: sideBoardY, size: 12, font: timesRomanFont })
        firstPage.drawText('Sideboard 1', { x: rightColCardX, y: sideBoardY, size: 12, font: timesRomanFont })

        firstPage.drawText(' 2', { x: rightColNumX, y: sideBoardY - line, size: 12, font: timesRomanFont })
        firstPage.drawText('Sideboard 2', { x: rightColCardX, y: sideBoardY - line, size: 12, font: timesRomanFont })
        // TODO: limit to max 15

        // sideboard count
        firstPage.drawText('15', { x: width-70, y: 81, size: 17, font: timesRomanFont })

        // Serialize the PDFDocument to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save()

        // Trigger the browser to download the PDF document
        downloadjs(pdfBytes, "decklist.pdf", "application/pdf");
    }

    return (
        <>
            <div className="left w100">
                <div className="left w100 mb20">
                    <Subtitle title="Contact us" />
                </div>
                <div className="left w100 mb20">
                    {/* {showSuccess == true ? (
                        <>
                            <Success></Success>
                        </>
                    ) : (
                        <> */}
                            <div className="left w100 mb40 overflowHidden pointer contactForm" onClick={() => modifyPdf()}>
                                click here
                            </div>
                        {/* </>
                    )} */}
                </div>
            </div>
        </>
    );
}

export default Contact;