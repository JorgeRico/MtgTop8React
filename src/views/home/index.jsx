import Layout from "/src/views/layout/core";
import CurrentEvents from "/src/views/home/events/current";
import PastEvents from "/src/views/home/events/past";
import Title from "/src/components/HTag/Title";
// import AdSenseAd from "/src/components/Adsense";
import SimpleBreadcrumb from "/src/components/Breadcrumb/Simple";

function Home() {
    
    return (
        <>
            <Layout 
                name        = "home"
                title       = "MTG Legacy stats - CAT Legacy"
                description = "Catalan MTG Legacy leagues, tournaments, players and cards"
            >
                <main className="left w100">
                    <SimpleBreadcrumb isHome={true} />
                    <Title title="MTG Leagues - Legacy" />
                    <p className="color-gray mb40">Magic The Gathering Catalan Tournaments</p>
                    <CurrentEvents title="Current Leagues - Legacy"></CurrentEvents>
                    {/* <AdSenseAd 
                        adClassNameStyles   = "mb20"
                        adClient            = "ca-pub-9482818665347681" // Replace with your publisher ID
                        adSlot              = "8133691484" // Replace with your banner ad slot ID
                        adFormat            = "auto" // Fixed-size banner
                        fullWidthResponsive = {true} 
                    /> */}
                    <PastEvents title="Past Leagues - Legacy"></PastEvents>
                </main>
            </Layout>
        </>
    );
}

export default Home;