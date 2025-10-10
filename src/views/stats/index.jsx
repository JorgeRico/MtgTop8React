import React, { useRef, useState, useEffect } from "react";
import StatsBox from "/src/components/List/Stats";

function LeagueStats(props) {
    const { id, isLeague, endpoint, endpointCards } = props;
    const effectRan                                 = useRef(false);
    const [ showElements, setShowElements ]         = useState(false);

    useEffect(() => {
        if (!effectRan.current) {
            setTimeout(() => {setShowElements(true)}, 1000);
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
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