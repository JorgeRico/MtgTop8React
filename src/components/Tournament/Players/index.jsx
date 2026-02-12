import { useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.jsx";
import { getAxiosEndpoint, replaceUrlIdParam } from '/src/hooks/useApi.jsx';
import PlayerList from "/src/components/List/Player/Normal";
import PlayersBlured from "/src/components/List/Player/Fake";
import HTag from "/src/components/HTag";
import Title from "/src/components/Tournament/Title";
import TournamentTitleBlured from "/src/components/Tournament/Fake";

function TournamentPlayers({ id, tournament }) {
    const [ renderPlayers, setRenderPlayers] = useState([]);
    const [ showPlayers, setShowPlayers ]    = useState(false)

    useEffect(() => {
        async function apiCall() {
            await getAxiosEndpoint(replaceUrlIdParam(endpoints.API_TOURNAMENT_PLAYERS, id))
            .then((response) => {
                setRenderPlayers(response.data);
                setShowPlayers(true);
            })
            .catch((err) => { 
                console.log('error tournament')
            });
        }
        
        apiCall();
    }, []);

    return (
        <>
            {showPlayers === false ? (
                <TournamentTitleBlured></TournamentTitleBlured>
            ) : (
                <Title tournament={tournament} isBlured={false}></Title>
            )}
            <section className="left w100 mt20 mb10">
                <HTag Tag="h2" text={"Top Players"} className="left f24" />
            </section>
            <section className="left w100 mb20">
                {showPlayers === false ? (
                        <PlayersBlured></PlayersBlured>
                    ) : (
                        <>
                            {renderPlayers.length > 0 && (
                                <PlayerList items={renderPlayers} isBlured={false} />
                            )}
                        </>
                    )
                }
            </section>
        </>
    )
}

export default TournamentPlayers;