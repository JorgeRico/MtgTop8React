import { useTranslation } from 'react-i18next';

export default function SocialDescriptionFooter() {
    const { t } = useTranslation();

    return (
        <>
            <div className="description">
                <div className="description-item color-copyright">{t('Magic The Gathering Tournaments Stats')}</div>
                <div className="description-item color-copyright">{t('Legacy Catalan Tournaments')}</div>
                <div className="description-item color-copyright">{t('Explore current leagues, view standings and decks')}</div>
                <div className="description-item color-copyright">{t('Explore past leagues, view standings and decks')}</div>
                <div className="description-item mt10">@catmagiclegacy</div>
            </div>
        </>
    );
}