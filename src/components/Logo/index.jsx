import { Link } from 'react-router-dom';
import LogoImage from "/src/components/Logo/Images";
import endpoints from "/src/services/endpoints.jsx";

export default function Logo() {
    return (
        <>
            <Link to={endpoints.API_HOME}>
                <p className="f24 mb10 mt0">Stats</p>
                <LogoImage />
            </Link>
        </>
    );
}