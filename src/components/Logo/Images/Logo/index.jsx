import Logos from "/src/assets/images/stats-logo.png";
import { useTranslation } from 'react-i18next';

export default function LogoImage() {
    const { t } = useTranslation();

    return (
        <>
            <img src={Logos} height="25" alt={t('alt-tags.mtg stats')} />
        </>
    );
}