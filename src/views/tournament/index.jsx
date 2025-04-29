import React, { useRef, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Layout from "/src/views/layout/core";
import Template from "/src/views/layout/template";
import TournamentPlayers from "/src/components/Tournament/Players";
import Stats from "/src/views/stats";
import BreadcrumbTournament from "components/Breadcrumb/Tournament";
import endpoints from "/src/services/endpoints.js";
import { useApi } from '/src/hooks/use-api.js';

function Tournament() {
    const { id }                       = useParams();
    const api                          = useApi();
    const effectRan                    = useRef(false);
    const [ tournament, setTournament] = useState({idLeague: '', name:'', date:'', players: ''});
    const [ loading, setLoading ]      = useState(false);
    
    // api call
    async function apiCall() {
        await api.getAxiosEndpoint(endpoints.API_TOURNAMENT_DATA.replace('{id}', id))
        .then((response) => {
            setTournament(prevState => ({
                ...prevState,
                'idLeague': response.data.idLeague,
                'name'    : response.data.name,
                'date'    : response.data.date,
                'players' : response.data.players,
                'format'  : api.getFormat(response.data.format)
            }));
            setLoading(true);
        })
        .catch((err) => { 
            console.log('error tournamnet')
        });
    }

    useEffect(() => {
        if (!effectRan.current) {
            apiCall();
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Layout name="tournaments">
                <Template
                    breadcrumb={
                        <BreadcrumbTournament 
                            title={tournament.name} 
                            endpoint={endpoints.HTTP_LEAGUE + tournament.idLeague} 
                            loading={loading}
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