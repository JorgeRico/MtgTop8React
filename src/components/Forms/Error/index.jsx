import React from "react";
import "./../module.css";
import ErrorMail from "/src/assets/images/error-mail.png";

function ErrorMessage({ message }) {
    return (
        <>
            <div className="left w100 mb40">
                <div className="left">
                    <img src={ErrorMail} alt="" className="alert" />
                </div>
                <div className="left mt15 ml25 w50">
                    <div className="left w100 mb20">{message}</div>
                    <div className="left w100">Pay 3 extra manas and try again.</div>
                </div>
            </div>
        </>
    )
}

export default ErrorMessage;