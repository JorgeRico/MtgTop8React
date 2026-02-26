import List from "/src/assets/images/list.webp";
import { useTranslation } from 'react-i18next';

export default function ListImage() {
    const { t } = useTranslation();

    return (
        <>
            <img src={List} width="24" alt={t('alt-tags.mtg stats list image')} className="left ml5 pt6" />
        </>
    );
}