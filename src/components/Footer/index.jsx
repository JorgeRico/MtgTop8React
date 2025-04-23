import React from 'react';
import "./module.css";
import CopyrightFooter from "/src/components/Footer/Copyright";
import SocialFooter from "/src/components/Footer/Social";

export default function Footer() {
    return (
        <>
            <div className="footer overflowHidden p20 mt40 bg-footer">
                <div className="container">
                    <SocialFooter></SocialFooter>
                </div>
            </div>
            <div className="left w100 copyright f10 bg-footer">
                <div className="container">
                    <CopyrightFooter></CopyrightFooter>
                </div>
            </div>
        </>
    );
}