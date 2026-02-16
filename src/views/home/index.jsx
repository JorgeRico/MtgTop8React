import Layout from "/src/views/layout/core";
import CurrentEvents from "/src/views/home/events/current";
import PastEvents from "/src/views/home/events/past";
import Title from "/src/components/HTag/Title";
// import AdSenseAd from "/src/components/Adsense";
import SimpleBreadcrumb from "/src/components/Breadcrumb/Simple";
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <Layout 
                name        = "home"
                title       = {t('seo-tags.home.title')}
                description = {t('seo-tags.home.description')}
            >
                <main className="left w100">
                    <SimpleBreadcrumb isHome={true} />
                    <Title title={t('seo-tags.home.text-title')} />
                    <p className="color-gray mb40">{t('seo-tags.home.text-description')}</p>
                    <CurrentEvents title={t('seo-tags.home.Current Leagues')}></CurrentEvents>
                    {/* <AdSenseAd 
                        adClassNameStyles   = "mb20"
                        adClient            = "ca-pub-9482818665347681" // Replace with your publisher ID
                        adSlot              = "8133691484" // Replace with your banner ad slot ID
                        adFormat            = "auto" // Fixed-size banner
                        fullWidthResponsive = {true} 
                    /> */}
                    <PastEvents title={t('seo-tags.home.Past Leagues')}></PastEvents>
                </main>
            </Layout>
        </>
    );
}

export default Home;