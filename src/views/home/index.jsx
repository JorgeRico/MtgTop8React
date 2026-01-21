import Layout from "/src/views/layout/core";
import CurrentEvents from "/src/views/home/events/current";
import PastEvents from "/src/views/home/events/past";
import Title from "/src/components/HTag/Title";
import SeoTags from "/src/hooks/use-seo.jsx";

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
                    <PastEvents title="Past Leagues"></PastEvents>
                </main>
            </Layout>
        </>
    );
}

export default Home;