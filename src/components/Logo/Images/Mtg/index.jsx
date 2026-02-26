import Logos from "/src/assets/images/mtg-logos.webp";
import { useTranslation } from 'react-i18next';

export default function LogoImage() {
    const { t } = useTranslation();

    return (
        <>
            <img src={Logos} width="100" height="17" alt={t('alt-tags.mtg stats')} className="f24 logos invertColor" />
        </>
    );
}