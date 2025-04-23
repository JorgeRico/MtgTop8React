import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import PlayerList from "/src/components/List/Player";
import BluredBigList from "/src/components/Blured/FakeLists/BigList";
import HTag from "/src/components/HTag";

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
            <div className="left w70 playerList">
                {showPlayers === false ? (
                        <BluredBigList></BluredBigList>
                    ) : (
                        <>
                            <div className="left w100 mt20">
                                <HTag Tag="h2" text={"Top Players"} className="left f24" />
                            </div>
                            {renderPlayers.length > 0 && (
                                <PlayerList items={renderPlayers} />
                            )}
                        </>
                    )
                }
            </div>
        </>
    )
}

export default TournamentPlayers;