import Layout from "/src/views/layout/core";
import ContactForm from "/src/components/Forms/Contact";
import Title from "/src/components/HTag/Title";
import SimpleBreadcrumb from "/src/components/Breadcrumb/Simple";
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <>
            <Layout 
                name        = "contact"
                title       = {t('seo-tags.contact-form.title')}
                canonical   = "contact"
                description = {t('seo-tags.contact-form.description')}
            >
                <main className="left w100">
                    <SimpleBreadcrumb title="contact" />
                    <Title title={t('seo-tags.contact-form.text-title')} />
                    <p className="mb40 color-gray">{t('seo-tags.contact-form.text-description')}</p>
                    <ContactForm></ContactForm>
                </main>
            </Layout>
        </>
    );
}

export default Contact;