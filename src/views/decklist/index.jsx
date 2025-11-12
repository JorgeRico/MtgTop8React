import React from "react";
import Layout from "/src/views/layout/core";
import DecklistForm from "/src/components/Decklist";
import SeoTags from "/src/hooks/use-seo.jsx";

function Decklist() {
    return (
        <>
            <SeoTags page="DECKLIST" id={null} name=""></SeoTags>
            <Layout name="decklist">
                <DecklistForm></DecklistForm>
            </Layout>
        </>
    );
}

export default Decklist;