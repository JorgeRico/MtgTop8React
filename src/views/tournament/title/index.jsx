import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import HTag from "/src/components/HTag";
import TournamentTitleBlured from "/src/components/Blured/Tournament";
import TournamentBreadcrumb from "/src/views/tournament/breadcrumb";

function TournamentTitle(props) {
    const api                                   = useApi();
    const effectRan                             = useRef(false);
    const [ tournament, setTournament]          = useState({idLeague: '', name:'', date:'', players: ''});
    const [ showTournament, setShowTournament ] = useState(false)
    const { id }                                = props;

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

    useEffect(() => {
        if (!effectRan.current) {
            apiCall();
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <TournamentBreadcrumb
                tournamentName={tournament.name} 
                tournamentIdLeague={tournament.idLeague}
                showTournament={showTournament}
            />
            {showTournament === false ? (
                <TournamentTitleBlured></TournamentTitleBlured>
            ) : (
                <>
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

export default TournamentTitle;