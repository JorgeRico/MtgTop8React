import { useState, useEffect } from "react";
import StatsBox from "/src/components/List/Stats";

function LeagueStats({ id, isLeague, endpoint, endpointCards }) {
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
                    endpoint      = {endpoint} 
                    endpointCards = {endpointCards}
                    isBlured      = {showElements === false ? true : false } 
                />
            </section>   
        </>
    )
}

export default LeagueStats;