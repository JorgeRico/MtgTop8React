import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js";
import { useApi } from '/src/hooks/use-api.js';
import BluredTournamentList from "/src/components/List/Tournament/Fake";
import LeagueTournamentItem from "/src/views/league/tournaments/item";

function LeagueTournament(props) {
    const api                                  = useApi();
    const effectRan                            = useRef(false);
    const [ renderElements, setRenderElements] = useState(null);
    const { id, format }                       = props;
    const [ showElements, setShowElements ]    = useState(false);
    
    // api call
    async function apiCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUE_TOURNAMENTS.replace('{id}', id))
            .then((response) => {
                setRenderElements(response.data);
                setShowElements(true);
            })
            .catch((err) => { 
                console.log('error league tournament')
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
            {showElements === false ? (
                    <BluredTournamentList></BluredTournamentList>
                ) : (
                    <LeagueTournamentItem
                        format         = {format}
                        renderElements = {renderElements}
                        url            = {endpoints.HTTP_TOURNAMENT}
                    />
            )}
        </>
    )
}

export default LeagueTournament;