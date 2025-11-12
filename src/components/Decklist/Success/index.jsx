import React from "react";
import "../module.css";
import Mail from "/src/assets/images/mail.png";

function Contact() {
    return (
        <>
            <div className="left w100 mb40 sendImage">
                <div className="left">
                    <img src={Mail} alt="" className="send invertColor" />
                </div>
                <div className="left mt15 ml25 w50">
                    <div className="left w100 mb20">Thank you for contacting us,</div>
                    <div className="left w100">Your query is in the stack. In response we'll play a brainstorm</div>
                </div>
            </div>
        </>
    )
}

export default Contact;