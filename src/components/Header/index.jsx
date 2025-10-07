import React from 'react';
import Logo from "/src/components/Logo";
import { Link } from 'react-router-dom';
import endpoints from "/src/services/endpoints.js";
import Mail from "/src/assets/images/mail.png";

export default function Header() {
    return (
        <>
            <div className="left w100 overflowHidden header">
                <div className="left pBody">
                    <Logo></Logo>
                </div>
                <div className="right p20 mt30 pointer">
                    <div className="left">
                        <img src={Mail} alt="" className="send invertColor" />
                    </div>
                    <div className="left ml10 mt1 contactus">
                        <Link to={endpoints.HTTP_CONTACT}>
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}