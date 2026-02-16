import Layout from "/src/views/layout/core";
import DecklistForm from "/src/components/Forms/Decklist";
import Title from "/src/components/HTag/Title";
import SimpleBreadcrumb from "/src/components/Breadcrumb/Simple";
import { useTranslation } from 'react-i18next';    

function Decklist() {
    const { t } = useTranslation();

    return (
        <>
            <Layout 
                name        = "decklist"
                title       = {t('seo-tags.decklist-form.title')}
                canonical   = "decklist"
                description = {t('seo-tags.decklist-form.description')}
            >
                <main className="left w100">
                    <SimpleBreadcrumb title="decklist" />
                    <Title title={t('seo-tags.decklist-form.text-title')} />
                    <p className="mb40 color-gray">{t('seo-tags.decklist-form.text-description')}</p>
                    <DecklistForm></DecklistForm>
                </main>
            </Layout>
        </>
    );
}

export default Decklist;