import React from "react";
import Layout from "/src/views/layout/core";
import ContactForm from "/src/components/Contact";

function Contact() {
    return (
        <>
            <Layout name="contact">
                <ContactForm></ContactForm>
            </Layout>
        </>
    );
}

export default Contact;