import React, { useRef, useState, useEffect } from "react";
import StatsBox from "/src/components/Stats";
import LoadingOptions from "/src/components/Blured/FakeLists/StatsList/LoadingOptions";

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
            {showElements === false ? (
                    <LoadingOptions></LoadingOptions>
                ) : (
                    <StatsBox 
                        id            = {id} 
                        isLeague      = {isLeague} 
                        endpoint      = {endpoint} 
                        endpointCards = {endpointCards}
                    />
                )
            }
        </>
    )
}

export default LeagueStats;