import Layout from "/src/views/layout/core";
import Title from "/src/components/HTag/Title";
// import AdSenseAd from "/src/components/Adsense";
import SimpleBreadcrumb from "/src/components/Breadcrumb/Simple";
import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t } = useTranslation();

    return (
        <>
            <Layout 
                name        = "notfound"
                title       = {t('seo-tags.not-found.title')}
                description = {t('seo-tags.not-found.description')}
            >
                <main className="left w100">
                    <SimpleBreadcrumb title={t('seo-tags.not-found.breadcrumb')} />
                    <Title title={t('seo-tags.not-found.text-title')} />
                    <p className="mb40 color-gray">{t('seo-tags.not-found.text-description')}</p>
                    {/* <AdSenseAd 
                        adClassNameStyles   = "mb20"
                        adClient            = "ca-pub-9482818665347681" // Replace with your publisher ID
                        adSlot              = "8133691484" // Replace with your banner ad slot ID
                        adFormat            = "auto" // Fixed-size banner
                        fullWidthResponsive = {true} 
                    /> */}
                </main>
            </Layout>
        </>
    );
}                        

export default NotFound;