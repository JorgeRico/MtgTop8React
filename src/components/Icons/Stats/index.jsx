import Stats from "/src/assets/images/stats.png";
import { useTranslation } from 'react-i18next';

export default function StatsImage() {
    const { t } = useTranslation();
    
    return (
        <>
            <img src={Stats} width="32" alt={t('alt-tags.mtg stats')} className="left" />
        </>
    );
}