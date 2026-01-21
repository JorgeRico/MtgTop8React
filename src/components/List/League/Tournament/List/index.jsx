import { useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js";
import { useApi } from '/src/hooks/use-api.js';
import BluredTournamentList from "/src/components/List/League/Tournament/Fake";
import LeagueTournamentBlock from "/src/components/List/League/Tournament/Block";

function LeagueTournament(props) {
    const api                                  = useApi();
    const [ renderElements, setRenderElements] = useState(null);
    const { id, format }                       = props;
    const [ showElements, setShowElements ]    = useState(false);
    const [ numPlayers, setNumplayers ]        = useState(0);
    const [ noResults, setNoResults ]          = useState(false);

    function countPlayers(data) {
        var totalPlayers = 0;
        var numTournaments = data.length;
        data.map((item) => (
            // console.log(item.players)
            totalPlayers += item.players
        ))

        // console.log(totalPlayers)
        // console.log(numTournaments)
        // console.log(Math.ceil(totalPlayers/numTournaments))
        setNumplayers(Math.ceil(totalPlayers/numTournaments))
    }

    useEffect(() => {
        async function apiCall() {
            await api.getAxiosEndpoint(endpoints.API_LEAGUE_TOURNAMENTS.replace('{id}', id))
                .then((response) => {
                    setRenderElements(response.data);
                    setShowElements(true);
                    countPlayers(response.data)
                })
                .catch((err) => { 
                    if (err.status === 404) { 
                        setNoResults(true);
                    }
                    console.log('error league tournament')
                });
        }

        apiCall();
    }, []);

    return (
        <>
            {showElements === false ? (
                    (noResults === true) ? (
                        <>
                            <div class="radius5 cardsList bg-footer padStatsBox">
                                Sorry, now we don't have tournaments registered for this league
                            </div>
                        </>
                    ) : (
                        <BluredTournamentList></BluredTournamentList>
                    )
                ) : (
                    <LeagueTournamentBlock
                        format         = {format}
                        renderElements = {renderElements}
                        url            = {endpoints.HTTP_TOURNAMENT}
                        isBlured       = {false}
                        numPlayers     = {numPlayers}
                    />
            )}
        </>
    )
}

export default LeagueTournament;