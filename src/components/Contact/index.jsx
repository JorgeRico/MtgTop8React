import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./module.css";
import Subtitle from '/src/components/HTag/SubTitle';
import Success from "/src/components/Contact/Success";
import Error from "/src/components/Contact/Error";

function Contact() {
    const [ showButton, setShowButton ]   = useState(true);
    const [ showSuccess, setShowSuccess ] = useState(false);
    const [ showError, setShowError ]     = useState(false);
    const [ toSend, setToSend ]           = useState({name: '', message: '', reply_to: '' });
    const mail_service                    = import.meta.env.VITE_APP_MAIL_SERVICE_ID;
    const mail_template                   = import.meta.env.VITE_APP_MAIL_TEMPLATE;
    const mail_public_key                 = import.meta.env.VITE_APP_MAIL_PUBLIC_ID;
    const form                            = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        setShowButton(false);

        emailjs.sendForm(mail_service, mail_template, form.current, mail_public_key)
            .then((response) => {
                // console.log('SUCCESS!', response.status, response.text);
                setShowSuccess(true);
            })
            .catch((err) => {
                // console.log('FAILED...', err);
                setShowError(true);
                setTimeout(() => {setShowButton(true)}, 2000);
                setTimeout(() => {setShowError(false)}, 2000);
            });
    };
        
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="left w100">
                <div className="left w100 mb20">
                    <Subtitle title="Contact us" />
                </div>
                <div className="left w100 mb20">
                    {showSuccess == true ? (
                        <>
                            <Success></Success>
                        </>
                    ) : (
                        <>
                            <div className="left w100 mb40 overflowHidden contactForm">
                                <form ref={form} onSubmit={onSubmit}>
                                    <div className="left mb20 w100">
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Your name'
                                            value={toSend.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="left mb20 w100">
                                        <input
                                            type='text'
                                            name='reply_to'
                                            placeholder='Your email'
                                            value={toSend.reply_to}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="left mb20 w100">
                                        <textarea
                                            className="left w70"
                                            name='message'
                                            placeholder='Your message'
                                            value={toSend.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    
                                    {showButton == true &&
                                        <div className="left w100">
                                            <button className="pointer" type='submit'>Submit</button>
                                        </div>
                                    }
                                    
                                    {showError == true &&
                                        <Error></Error>
                                    }
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Contact;