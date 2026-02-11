import Layout from "/src/views/layout/core";
import ContactForm from "/src/components/Forms/Contact";
import Title from "/src/components/HTag/Title";
import SimpleBreadcrumb from "/src/components/Breadcrumb/Simple";

function Contact() {
    return (
        <>
            <Layout 
                name        = "contact"
                title       = "MTG Legacy stats - CAT Legacy - Contact"
                canonical   = "contact"
                description = "Contact - Catalan MTG Legacy leagues, tournaments, players and cards"
            >
                <main className="left w100">
                    <SimpleBreadcrumb title="contact" />
                    <Title title="Contact us" />
                    <p className="mb40 color-gray">Ask for information about leagues, classifications or what you want . . .</p>
                    <ContactForm></ContactForm>
                </main>
            </Layout>
        </>
    );
}

export default Contact;