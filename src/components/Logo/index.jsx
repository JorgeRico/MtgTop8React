import { Link } from 'react-router-dom';
import LogoImage from "/src/components/Logo/Images";
import endpoints from "/src/services/endpoints.jsx";
import HTag from "/src/components/HTag";

export default function Logo() {
    return (
        <>
            <Link to={endpoints.API_HOME}>
                <HTag Tag="h5" className="f24" text="Stats" />
                <LogoImage />
            </Link>
        </>
    );
}