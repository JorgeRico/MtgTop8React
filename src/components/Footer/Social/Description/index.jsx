import Subtitle from '/src/components/HTag/SubTitle';
import { useTranslation } from 'react-i18next';

export default function SocialDescriptionFooter() {
    const { t } = useTranslation();

    return (
        <>
            <div className="left mt10">
                <div className="left w100 mt10 color-copyright">{t('Magic The Gathering Tournaments Stats')}</div>
                <div className="left w100 mt10 color-copyright">{t('Legacy Catalan Tournaments')}</div>
                <div className="left w100 mt10 color-copyright">{t('Explore current leagues, view standings and decks')}</div>
                <div className="left w100 mt10 color-copyright">{t('Explore past leagues, view standings and decks')}</div>
                <div className="left w100 mt10 color-copyright">@catmagiclegacy</div>
                <div className="left w100 mt10">
                    <Subtitle title="Follow us" />
                </div>
            </div>
        </>
    );
}