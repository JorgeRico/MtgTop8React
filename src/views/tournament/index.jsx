import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import { useParams } from 'react-router-dom';
import StatsTournamentBox from "/src/components/Stats/Tournament";
import PlayerCard from "/src/components/Player";
import HTag from "/src/components/HTag";
import BackLink from "/src/components/Link/BackLink";
import Layout from "/src/views/layout";
import BluredBackLink from "/src/components/Blured/BackLink";
import BluredBigList from "/src/components/Blured/FakeLists/BigList";

function Tournament() {
    const api                                   = useApi();
    const effectRan                             = useRef(false);
    const [ renderPlayers, setRenderPlayers]    = useState([]);
    const [ tournament, setTournament]          = useState({idLeague: '', name:'', date:''});
    const [ showTournament, setShowTournament ] = useState(false)
    const { id }                                = useParams();

    // api call
    async function apiCall() {
        await api.getAxiosEndpoint(endpoints.API_TOURNAMENT_DATA.replace('{id}', id))
        .then((response) => {
            setTournament(prevState => ({
                ...prevState,
                'idLeague': response.data.idLeague,
                'name': response.data.name,
                'date': response.data.date
            }));
            setShowTournament(true);

        })
        .catch((err) => { 
            console.log('error tournamnet')
        });
    }

    async function apiPlayersCall() {
        await api.getAxiosEndpoint(endpoints.API_TOURNAMENT_PLAYERS.replace('{id}', id))
        .then((response) => {
            setRenderPlayers(response.data);
            setShowTournament(true);

        })
        .catch((err) => { 
            console.log('error tournamnet')
        });
    }

    useEffect(() => {
        if (!effectRan.current) {
            apiCall();
            apiPlayersCall();
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showTitle = () => {
        return (
            <>
                {showTournament === false ? (
                    <BluredBackLink></BluredBackLink>
                ) : (
                    <BackLink endpoint={endpoints.API_LEAGUE + tournament.idLeague} title={tournament.name + " - " + tournament.date}></BackLink>
                )}
            </>
        )
    }

    const showPlayers = () => {
        return (
            <>
                {showTournament === false ? (
                        <BluredBigList></BluredBigList>
                    ) : (
                        <>
                            {renderPlayers.length > 0 && (
                                <PlayerCard items={renderPlayers} />
                            )}
                        </>
                    )
                }
            </>
        )
    }

    const showStats = () => {
        return (
            <>
                {showTournament === false ? (
                        <div className="left w100 mt10">
                            <BluredBigList></BluredBigList>
                        </div>
                    ) : (
                        <div className="left w100 ml25 mt10">
                            <StatsTournamentBox></StatsTournamentBox>
                        </div>
                    )
                }
            </>
        )
    }

    return (
        <>
            <Layout name="tournaments">
                {showTitle()}
                <div className="left w100 mt20">
                    {showPlayers()}
                </div>
                <div className="left w100">
                    <HTag Tag="h3" text="Stats" className="left ml15 titlePadding" />
                    {showStats()}
                </div>
            </Layout>
        </>
    );
}

export default Tournament;