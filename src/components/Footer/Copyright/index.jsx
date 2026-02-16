import { useTranslation } from 'react-i18next';

export default function CopyrightFooter() {
    const { t } = useTranslation();
    
    return (
        <>
            <section className="left w100 copyright f10 bg-footer">
                <div className="container">
                    <div className="message mt10 center color-copyright">
                        {t('The literal and graphical information presented on this site about Magic: The Gathering, including card images and mana symbols, is copyright Wizards of the Coast, LLC. Scryfall is not produced by or endorsed by Wizards of the Coast.')}
                    </div>
                </div>
            </section>
        </>
    );
}