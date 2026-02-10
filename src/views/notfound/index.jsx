import Layout from "/src/views/layout/core";
import Title from "/src/components/HTag/Title";
import AdSenseAd from "/src/components/Adsense";

import HomeItemBreadcrumb from "/src/components/Breadcrumb/Items/Home";
import DashItemBreadcrumb from "/src/components/Breadcrumb/Items/Dash";

function NotFound() {

    return (
        <>
            <Layout 
                name        = "notfound"
                title       = "MTG Legacy stats - CAT Legacy - Page not found"
                description = "Catalan MTG Legacy leagues, tournaments, players and cards - Page not found"
            >
                <main className="left w100 mt20">
                    <section className={`left w100 f14 mb20`}>
                        <HomeItemBreadcrumb></HomeItemBreadcrumb>
                        <DashItemBreadcrumb></DashItemBreadcrumb>
                    </section>
                    <Title title="Error 404 - Page not found" />
                    <p className="mb40 color-gray">This url does not exist. Please check the address and try again.</p>
                    <AdSenseAd 
                        adClassNameStyles   = "mb20"
                        adClient            = "ca-pub-9482818665347681" // Replace with your publisher ID
                        adSlot              = "8133691484" // Replace with your banner ad slot ID
                        adFormat            = "auto" // Fixed-size banner
                        fullWidthResponsive = {true} 
                    />
                </main>
            </Layout>
        </>
    );
}                        

export default NotFound;