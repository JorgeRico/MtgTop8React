import React from "react";
import "../module.css";
import ErrorMail from "/src/assets/images/error-mail.png";

function Contact() {
    return (
        <>
            <div className="left w100 mb40">
                <div className="left">
                    <img src={ErrorMail} alt="" className="error" />
                </div>
                <div className="left mt15 ml25 w50">
                    <div className="left w100 mb20">Please, fill all data fields.</div>
                    <div className="left w100">Pay 3 extra manas and try again.</div>
                </div>
            </div>
        </>
    )
}

export default Contact;