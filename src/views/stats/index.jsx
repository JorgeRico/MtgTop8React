import { useState, useEffect } from "react";
import StatsBox from "/src/components/List/Stats";
import endpoints from "/src/services/endpoints.jsx";

function LeagueStats({ id, isLeague }) {
    const [ showElements, setShowElements ] = useState(false);

    useEffect(() => {
        setTimeout(() => {setShowElements(true)}, 500);
    }, []);

    return (
        <>
            <section className="left w100 mt10">
                <StatsBox 
                    id            = {id} 
                    isLeague      = {isLeague} 
                    endpoint      = {isLeague ? endpoints.API_LEAGUE_STATS : endpoints.API_TOURNAMENT_STATS} 
                    endpointCards = {isLeague ? endpoints.API_LEAGUE_CARD_STATS : endpoints.API_TOURNAMENT_CARD_STATS}
                    isBlured      = {showElements === false ? true : false } 
                />
            </section>   
        </>
    )
}

export default LeagueStats;