import React from "react";
import Layout from "/src/views/layout/core";
import DecklistForm from "/src/components/Forms/Decklist";
import SeoTags from "/src/hooks/useSeo.jsx";
import Title from "/src/components/HTag/Title";

function Decklist() {
    return (
        <>
            <SeoTags
                title="MTG Legacy stats - CAT Legacy - Decklist"
                canonical="decklist"
                description="Decklist - Catalan MTG Legacy leagues, tournaments, players and cards">
            </SeoTags>
            <Layout name="decklist">
                <main className="left w100 mt20">
                    <Title title="Decklist generator" />
                    <p className="mb40 color-gray">Print your deck on a tournament pdf stylesheet</p>
                    <DecklistForm></DecklistForm>
                </main>
            </Layout>
        </>
    );
}

export default Decklist;