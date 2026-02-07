import Layout from "/src/views/layout/core";
// import Template from "/src/views/layout/template";
// import endpoints from "/src/services/endpoints.jsx";
// import Breadcrumb from "/src/components/Breadcrumb";
import SeoTags from "/src/hooks/useSeo.jsx";
import Title from "/src/components/HTag/Title";
import AdSenseAd from "/src/components/Adsense";

import HomeItemBreadcrumb from "/src/components/Breadcrumb/Items/Home";
import DashItemBreadcrumb from "/src/components/Breadcrumb/Items/Dash";

function NotFound() {

    return (
        <>
            <SeoTags 
                title="MTG Legacy stats - CAT Legacy - Page not found"
                canonical=""
                description="Catalan MTG Legacy leagues, tournaments, players and cards - Page not found">
            </SeoTags>
            <Layout name="notfound">
                <main className="left w100 mt20">
                    <section className={`left w100 f14 mb20`}>
                        <HomeItemBreadcrumb></HomeItemBreadcrumb>
                        <DashItemBreadcrumb></DashItemBreadcrumb>
                    </section>
                                
                    <Title title="Error 404 - Page not found" />
                    <p className="mb40 color-gray">This url does not exist. Please check the address and try again.</p>
                    <div className="left w100 mb20 ad-container">
                        <AdSenseAd 
                            adClient="ca-pub-9482818665347681" // Replace with your publisher ID
                            adSlot="8133691484" // Replace with your banner ad slot ID
                            adFormat="auto" // Fixed-size banner
                            fullWidthResponsive={true} 
                        />
                    </div>
                </main>
            </Layout>
        </>
    );
}                        

export default NotFound;