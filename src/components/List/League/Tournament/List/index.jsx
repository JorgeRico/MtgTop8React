import { useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.jsx";
import { getAxiosEndpoint, replaceUrlIdParam } from '/src/hooks/useApi.jsx';
import BluredTournamentList from "/src/components/List/League/Tournament/Fake";
import LeagueTournamentBlock from "/src/components/List/League/Tournament/Block";

function LeagueTournament({ id, format }) {
    const [ renderElements, setRenderElements]  = useState(null);
    const [ showElements, setShowElements ]     = useState(false);
    const [ numPlayers, setNumplayers ]         = useState(0);
    const [ noResults, setNoResults ]           = useState(false);
    const [ classification, setClassification ] = useState(null);

    function countPlayers(data) {
        var totalPlayers = 0;
        var numTournaments = data.length;

        data.map((item) => (
            totalPlayers += item.players
        ))

        setNumplayers(Math.ceil(totalPlayers/numTournaments))
    }

    useEffect(() => {
        async function apiCall() {
            await getAxiosEndpoint(replaceUrlIdParam(endpoints.API_LEAGUE_TOURNAMENTS, id))
                .then((response) => {
                    setRenderElements(response.data);
                    setShowElements(true);
                    countPlayers(response.data);
                    // setClassification('pppp');
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
                        classification = {classification}
                    />
            )}
        </>
    )
}

export default LeagueTournament;