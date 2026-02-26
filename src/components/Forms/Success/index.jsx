import "./../module.css";
import Mail from "/src/assets/images/mail_big.webp";
import { useTranslation } from 'react-i18next';

function SuccessMessage() {
    const { t } = useTranslation();
    
    return (
        <>
            <div className="left w100 mb40 sendImage">
                <div className="left">
                    <img src={Mail} alt={t('alt-tags.legacy mtg cat mail')} className="alert invertColor mt10" />
                </div>
                <div className="left mt15 ml25 w50">
                    <div className="left w100 mb20">{t('success.Thank you for contacting us,')}</div>
                    <div className="left w100">{t("success.Your query is in the stack. In response we'll play a brainstorm")}</div>
                </div>
            </div>
        </>
    )
}

export default SuccessMessage;