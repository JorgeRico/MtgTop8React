import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Layout from "/src/views/layout/core";
import Template from "/src/views/layout/template";
import TournamentPlayers from "/src/components/Tournament/Players";
import Stats from "/src/views/stats";
import Breadcrumb from "/src/components/Breadcrumb";
import endpoints from "/src/services/endpoints.jsx";
import { getAxiosEndpoint } from '/src/hooks/useApi.jsx';
import { getFormat } from '/src/hooks/useCommon.jsx';
import SeoTags from "/src/hooks/useSeo.jsx";

function Tournament() {
    const { id }                       = useParams();
    const [ tournament, setTournament] = useState({idLeague: '', name:'', date:'', players: ''});
    const [ loading, setLoading ]      = useState(false);

    useEffect(() => {
        async function apiCall() {
            await getAxiosEndpoint(endpoints.API_TOURNAMENT_DATA.replace('{id}', id))
            .then((response) => {
                setTournament(prevState => ({
                    ...prevState,
                    'idLeague': response.data.idLeague,
                    'name'    : response.data.name,
                    'date'    : response.data.date,
                    'players' : response.data.players,
                    'format'  : getFormat(response.data.format)
                }));
                setLoading(true);
            })
            .catch((err) => { 
                console.log('error tournamnet')
            });
        }

        apiCall();
    }, []);

    return (
        <>  
            {tournament.name != '' &&
                <SeoTags
                    title={`Mtg Stats - Legacy Tournament: ${tournament.name} - ${tournament.date}`}
                    canonical={`tournaments/${id}`}
                    description="Tournament - Catalan MTG Legacy leagues, tournaments, players and cards">
                </SeoTags>
            }
            <Layout name="tournaments">
                <Template
                    breadcrumb={
                        <Breadcrumb
                            title={tournament.name} 
                            endpoint={endpoints.HTTP_LEAGUE + tournament.idLeague} 
                            loading={loading}
                            isLeague={false}
                        />
                    }
                    tournament={
                        <TournamentPlayers 
                            id={id} 
                            tournament={tournament} 
                        />
                    }
                    stats={
                        <Stats 
                            id={id}
                            isLeague={false} 
                            endpoint={endpoints.API_TOURNAMENT_STATS} 
                            endpointCards={endpoints.API_TOURNAMENT_CARD_STATS}
                        />
                    }
                    title="Tournament Stats"
                />                    
            </Layout>
        </>
    );
}                        

export default Tournament;