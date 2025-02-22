import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import { useParams } from 'react-router-dom';
import StatsTournamentBox from "/src/components/Stats/Tournament";
import PlayerCard from "/src/components/Player";
import HTag from "/src/components/HTag";
import BackLink from "/src/components/Link/BackLink";
import Layout from "/src/views/layout";
import Spinner from "/src/components/Spinner";

function Tournament() {
    const api                                   = useApi();
    const effectRan                             = useRef(false);
    const [ renderPlayers, setRenderPlayers]    = useState([]);
    const [ tournament, setTournament]          = useState({idLeague: '', name:'', date:''});
    const [ showTournament, setShowTournament ] = useState(false)
    const { id }                                = useParams();

    // api call
    async function apiCall() {
        await api.getAxiosEndpoint(endpoints.API_TOURNAMENTS + '/' + id + '/data')
        .then((response) => {
            setTournament(prevState => ({
                ...prevState,
                'idLeague': response.data.tournament.idLeague,
                'name': response.data.tournament.name,
                'date': response.data.tournament.date
            }));
            setRenderPlayers(response.data.players);
            setShowTournament(true);

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
                <BackLink endpoint={"/leagues/" + tournament.idLeague} title={tournament.name + " - " + tournament.date}></BackLink>
                <div className="left w100 mt20">
                    {showTournament === false ? (
                            <Spinner></Spinner>
                        ) : (
                            <>
                                {renderPlayers.length > 0 && (
                                    <PlayerCard items={renderPlayers} />
                                )}
                            </>
                        )
                    }
                </div>
                <HTag Tag="h3" text="Stats" className="left ml15 titlePadding" />
                <div className="left w100 ml25 mt10">
                    {showTournament === false ? (
                            <Spinner></Spinner>
                        ) : (
                            <StatsTournamentBox></StatsTournamentBox>
                        )
                    }
                </div>
            </Layout>
        </>
    );
}

export default Tournament;