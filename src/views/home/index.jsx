import endpoints from "/src/services/endpoints.js";
import Layout from "/src/views/layout/core";
import Events from "/src/views/home/events";
import Title from "/src/components/HTag/Title";
import SeoTags from "/src/hooks/use-seo.jsx";
import { useState, useEffect } from "react";
import { useApi } from '/src/hooks/use-api.js';

function Home() {
    const api                                   = useApi();
    const [ currentLeagues, setCurrentLeagues ] = useState(null);
    const [ pastLeagues, setPastLeagues ]       = useState(null);
    const [ showElements, setShowElements ]     = useState(true);

    useEffect(() => {
        async function apiCall() {
            await api.getAxiosEndpoint(endpoints.API_LEAGUE_HOME)
            .then((response) => {
                setCurrentLeagues(response.data.current);
                setPastLeagues(response.data.past);
                setShowElements(false);
            })
            .catch((err) => { 
                console.log('Error')
            });
        }
        
        apiCall();
    }, []);


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
                    <Events elements={currentLeagues} showElements={showElements} title="Current Events"></Events>
                    <Events elements={pastLeagues} showElements={showElements} title="Past Events"></Events>
                </main>
            </Layout>
        </>
    );
}

export default Home;