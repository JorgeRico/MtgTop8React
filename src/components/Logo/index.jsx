import { Link } from 'react-router-dom';
import LogoImage from "/src/components/Logo/Images";
import endpoints from "/src/services/endpoints.jsx";
import { useTranslation } from 'react-i18next';

export default function Logo() {
    const { t } = useTranslation();
    
    return (
        <>
            <Link to={endpoints.API_HOME}>
                <p className="f24 mb10 mt0">{t('header.logo.Stats')}</p>
                <LogoImage />
            </Link>
        </>
    );
}