import Title from "/src/components/HTag/Title";
import { Link } from 'react-router-dom';
import LogoImage from "/src/components/Logo/Images";
import endpoints from "/src/services/endpoints.jsx";

export default function Logo() {
    return (
        <>
            <Link to={endpoints.API_HOME}>
                <Title title="Stats" />
                <LogoImage />
            </Link>
        </>
    );
}