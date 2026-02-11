import Layout from "/src/views/layout/core";
import DecklistForm from "/src/components/Forms/Decklist";
import Title from "/src/components/HTag/Title";
import SimpleBreadcrumb from "/src/components/Breadcrumb/Simple";

function Decklist() {
    return (
        <>
            <Layout 
                name        = "decklist"
                title       = "MTG Legacy stats - CAT Legacy - Decklist"
                canonical   = "decklist"
                description = "Decklist - Catalan MTG Legacy leagues, tournaments, players and cards"
            >
                <main className="left w100">
                    <SimpleBreadcrumb title="decklist" />
                    <Title title="Decklist generator" />
                    <p className="mb40 color-gray">Print your deck on a tournament pdf stylesheet</p>
                    <DecklistForm></DecklistForm>
                </main>
            </Layout>
        </>
    );
}

export default Decklist;