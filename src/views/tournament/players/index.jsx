import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import PlayerCard from "/src/components/Player";
import BluredBigList from "/src/components/Blured/FakeLists/BigList";

function TournamentPlayers(props) {
    const api                                = useApi();
    const effectRan                          = useRef(false);
    const [ renderPlayers, setRenderPlayers] = useState([]);
    const [ showPlayers, setShowPlayers ]    = useState(false)
    const { id }                             = props;

    async function apiCall() {
        await api.getAxiosEndpoint(endpoints.API_TOURNAMENT_PLAYERS.replace('{id}', id))
        .then((response) => {
            setRenderPlayers(response.data);
            setShowPlayers(true);
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
            {showPlayers === false ? (
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

export default TournamentPlayers;