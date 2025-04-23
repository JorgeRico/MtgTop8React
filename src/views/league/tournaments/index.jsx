import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import TournamentList from "/src/components/List/Tournament";
import BluredBigList from "/src/components/Blured/FakeLists/BigList";
import HTag from "/src/components/HTag";

function LeagueTournament(props) {
    const api                                  = useApi();
    const effectRan                            = useRef(false);
    const [ renderElements, setRenderElements] = useState(null);
    const { id }                               = props;
    const [ showElements, setShowElements ]    = useState(false);
    
    // api call
    async function apiCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUE_TOURNAMENTS.replace('{id}', id))
            .then((response) => {
                setRenderElements(response.data);
                setShowElements(true);
            })
            .catch((err) => { 
                console.log('error league tournament')
            });
    }

    useEffect(() => {
        if (!effectRan.current) {
            apiCall();
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {showElements === false ? (
                    <BluredBigList></BluredBigList>
                ) : (
                <>
                    <div className="left w100 mb30">
                        <HTag Tag="h1" text={"Tournaments"} className="left f24 mb5" />
                        <div className="left w100 f14">Format: Legacy</div>
                    </div>
                    {renderElements != null && (
                        <div className="left w100">
                            <TournamentList url={endpoints.API_TOURNAMENT} items={renderElements}/>
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default LeagueTournament;