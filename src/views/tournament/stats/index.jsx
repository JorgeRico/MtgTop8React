import React, { useRef, useState, useEffect } from "react";
import StatsTournamentBox from "/src/components/Stats/Tournament";
import Title from "/src/components/HTag/Title";
import BluredBigList from "/src/components/Blured/FakeLists/BigList";

function TournamentStats(props) {
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
            <div className="left w100 mt20">
                <Title title="Tournament Stats" />
            </div>
            <div className="left w100 mt10">
                {showElements === false ? (
                        <BluredBigList></BluredBigList>
                    ) : (
                        <StatsTournamentBox id={id}></StatsTournamentBox>
                    )
                }
            </div>
        </>
    )
}

export default TournamentStats;