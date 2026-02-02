import Layout from "/src/views/layout/core";
import CurrentEvents from "/src/views/home/events/current";
import PastEvents from "/src/views/home/events/past";
import Title from "/src/components/HTag/Title";
import SeoTags from "/src/hooks/useSeo.jsx";
import AdSenseAd from "/src/components/Adsense";

function Home() {
    
    return (
        <>
            <SeoTags 
                title="MTG Legacy stats - CAT Legacy"
                canonical=""
                description="Catalan MTG Legacy leagues, tournaments, players and cards">
            </SeoTags>
            <Layout name="home">
                <main className="left w100 mt20">
                    <Title title="Leagues" />
                    <p className="mb40 color-gray">Explore current and past leagues, view standings and decks</p>
                    <CurrentEvents title="Current Leagues"></CurrentEvents>
                    <div className="left w100 mb20">
                        <AdSenseAd 
                            adClient="ca-pub-9482818665347681" // Replace with your publisher ID
                            adSlot="8133691484" // Replace with your banner ad slot ID
                            adFormat="auto" // Fixed-size banner
                            fullWidthResponsive={true} 
                        />
                    </div>
                    <PastEvents title="Past Leagues"></PastEvents>
                </main>
            </Layout>
        </>
    );
}

export default Home;