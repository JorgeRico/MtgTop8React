import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js";
import { useApi } from '/src/hooks/use-api.js';
import ListLeague from "/src/components/List/Normal/League";
import LeagueList from "/src/components/List/Fake/LeagueList";
import Title from "/src/components/HTag/Title";

function Events(props) {
    const api                                  = useApi();
    const effectRan                            = useRef(false);
    const [ renderElements, setRenderElements] = useState(null);
    const [ showElements, setShowElements ]    = useState(true);
    const { title, endpoint }                  = props;

    // api call
    async function apiCall() {
        await api.getAxiosEndpoint(endpoint)
        .then((response) => {
            setRenderElements(response.data);
            setShowElements(false);
        })
        .catch((err) => { 
            console.log('Error' + title)
        });
    }

    useEffect(() => {
        if (!effectRan.current) {
            apiCall();
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [renderElements]);

    return (
        <>
            <div className="left w100 mb15">
                <Title title={title} />
            </div>
            {showElements === true ? (
                    <LeagueList></LeagueList>
                ) : (
                    <>
                        {renderElements != null && (
                            <ListLeague url={endpoints.HTTP_LEAGUE} items={renderElements} />
                        )}
                    </>
                )
            }
        </>
    );
}

export default Events;