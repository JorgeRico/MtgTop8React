import Location from "/src/assets/images/location.webp";
import { useTranslation } from 'react-i18next';

export default function LocationImage() {
    const { t } = useTranslation();

    return (
        <>
            <img src={Location} width="20" alt={t('alt-tags.mtg location')} className="left ml5" />
        </>
    );
}