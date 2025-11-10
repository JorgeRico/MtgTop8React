import React from "react";
import endpoints from "/src/services/endpoints.js";
import Layout from "/src/views/layout/core";
import Events from "/src/views/home/events";
import Title from "/src/components/HTag/Title";
import SeoTags from "/src/hooks/use-seo.jsx";

function Home() {
    return (
        <>
            <SeoTags page="HOME" id={null} name=""></SeoTags>
            <Layout name="home">
                <main className="left w100 mt20">
                    <Title title="Leagues" />
                    <p className="mb40 color-gray">Explore current and past leagues, view standings and decks</p>
                    <Events endpoint={endpoints.API_LEAGUE_CURRENT} title="Current Events"></Events>
                    <Events endpoint={endpoints.API_LEAGUE_PAST} title="Past Events"></Events>
                </main>
            </Layout>
        </>
    );
}

export default Home;