import React, { useRef, useState, useEffect } from "react";
import StatsBox from "/src/components/Stats/League";
import Title from "/src/components/HTag/Title";
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
            <div className="left w100 mt30">
                <Title title="Season Stats" />
            </div>
            <div className="left w100 mt10">
                {showElements === false ? (
                        <BluredBigList></BluredBigList>
                    ) : (
                        <StatsBox id={id}></StatsBox>
                    )
                }
            </div>
        </>
    )
}

export default LeagueStats;