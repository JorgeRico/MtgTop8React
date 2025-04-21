import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import { useParams } from 'react-router-dom';
import StatsTournamentBox from "/src/components/Stats/Tournament";
import PlayerCard from "/src/components/Player";
import Title from "/src/components/HTag/Title";
import HTag from "/src/components/HTag";
import Layout from "/src/views/layout";
import BluredBreadcrumb from "/src/components/Blured/Breadcrumb";
import BluredBigList from "/src/components/Blured/FakeLists/BigList";
import BreadcrumbTournament from "components/Breadcrumb/Tournament";

function Tournament() {
    const api                                   = useApi();
    const effectRan                             = useRef(false);
    const [ renderPlayers, setRenderPlayers]    = useState([]);
    const [ tournament, setTournament]          = useState({idLeague: '', name:'', date:'', players: ''});
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
                'date': response.data.date,
                'players' : response.data.players
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
                    <BluredBreadcrumb></BluredBreadcrumb>
                ) : (
                    <>
                        <BreadcrumbTournament title={tournament.name} endpoint={endpoints.API_LEAGUE + tournament.idLeague}></BreadcrumbTournament>
                        <div className="left w100 mt20 pb0">
                            <div className="left">
                                <HTag Tag="h1" text={tournament.name} className="f20" />
                            </div>
                            <div className="left w100">Date: {tournament.date}</div>
                            <div className="left w100">Players: {tournament.players}</div>
                            <div className="left w100 mt20">
                                <HTag Tag="h2" text={"Top Players"} className="left f20" />
                            </div>
                        </div>
                    </>
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
                <div className="left w100 mt10">
                    {showTournament === false ? (
                            <BluredBigList></BluredBigList>
                        ) : (
                            <StatsTournamentBox></StatsTournamentBox>
                        )
                    }
                </div>
            </>
        )
    }

    return (
        <>
            <Layout name="tournaments">
                {showTitle()}
                <div className="left w100">
                    {showPlayers()}
                    <div className="left w100 mt20">
                        <Title title="Tournament Stats" />
                    </div>
                    {showStats()}
                </div>
            </Layout>
        </>
    );
}

export default Tournament;