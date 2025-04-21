import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import ListLeague from "/src/components/List/League";
import BluredSmallList from "/src/components/Blured/FakeLists/SmallList";
import Layout from "/src/views/layout";
import Title from "components/HTag/Title";

function Home() {
    const api                                             = useApi();
    const effectRan                                       = useRef(false);
    const [ renderElements, setRenderElements]            = useState(null);
    const [ renderPastElements, setRenderPastElements]    = useState(null);
    const [ waitingElements, setWaitingElements ]         = useState(true);
    const [ waitingPastElements, setWaitingPastElements ] = useState(true);

    // api call
    async function apiCurrentCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUE_CURRENT)
        .then((response) => {
            setRenderElements(response.data);
            setWaitingElements(false);
        })
        .catch((err) => { 
            console.log('error current tournaments')
        });
    }

    // api call
    async function apiPastCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUE_PAST)
        .then((response) => {
            setRenderPastElements(response.data);
            setWaitingPastElements(false);
        })
        .catch((err) => { 
            console.log('error past tournaments')
        });
    }

    useEffect(() => {
        if (!effectRan.current) {
            apiCurrentCall();
            apiPastCall();
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [renderElements]);

    const showElements = (waitingElements, renderElements) => {
        return (
            <>
                {waitingElements === true ? (
                        <BluredSmallList></BluredSmallList>
                    ) : (
                        <>
                            {renderElements != null && (
                                <ListLeague url={endpoints.API_LEAGUE} items={renderElements} />
                            )}
                        </>
                    )
                }
            </>
        )
    }

    return (
        <>
            <Layout name="home">
                <div className="left w100 mt20">
                    <Title title="Current Events" />
                    {showElements(waitingElements, renderElements)}
                    <Title title="Past Events" />
                    {showElements(waitingPastElements, renderPastElements)}
                </div>
            </Layout>
        </>
    );
}

export default Home;