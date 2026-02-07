import { useState, useEffect } from "react";
import StatsBox from "/src/components/List/Stats";

function LeagueStats(props) {
    const { id, isLeague, endpoint, endpointCards } = props;
    const [ showElements, setShowElements ]         = useState(false);

    useEffect(() => {
        setTimeout(() => {setShowElements(true)}, 500);
    }, []);

    return (
        <>
            <StatsBox 
                id            = {id} 
                isLeague      = {isLeague} 
                endpoint      = {endpoint} 
                endpointCards = {endpointCards}
                isBlured      = {showElements === false ? true : false } 
            />      
        </>
    )
}

export default LeagueStats;