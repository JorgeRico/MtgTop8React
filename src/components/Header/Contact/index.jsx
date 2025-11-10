import { Link } from 'react-router-dom';
import endpoints from "/src/services/endpoints.js";
import Mail from "/src/assets/images/mail.png";

export default function HeaderContact() {
    return (
        <>
            <div className="right p20 mt30 pointer">
                <div className="left">
                    <img src={Mail} alt="Contact us - mtg legacy" className="send invertColor" width="25" height="25" />
                </div>
                <div className="left ml10 contactus">
                    <Link to={endpoints.HTTP_CONTACT}>
                        Contact us
                    </Link>
                </div>
            </div>
        </>
    );
}