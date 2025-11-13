import React from "react";
import Layout from "/src/views/layout/core";
import ContactForm from "/src/components/Forms/Contact";
import SeoTags from "/src/hooks/use-seo.jsx";

function Contact() {
    return (
        <>
            <SeoTags page="CONTACT" id={null} name=""></SeoTags>
            <Layout name="contact">
                <ContactForm></ContactForm>
            </Layout>
        </>
    );
}

export default Contact;