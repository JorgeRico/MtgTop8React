import React, { useRef, useState, useEffect } from "react";
import StatsBox from "/src/components/Stats/League";
import BluredBigList from "/src/components/Blured/FakeLists/BigList";

function LeagueStats(props) {
    const { id }                            = props;
    const effectRan                         = useRef(false);
    const [ showElements, setShowElements ] = useState(false);

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
                    <BluredBigList></BluredBigList>
                ) : (
                    <StatsBox id={id}></StatsBox>
                )
            }
        </>
    )
}

export default LeagueStats;