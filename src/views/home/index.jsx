import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import ListLink from "/src/components/List/Link";
import Layout from "/src/views/layout";
import Spinner from "/src/components/Spinner";

function Home() {
    const api                                             = useApi();
    const effectRan                                       = useRef(false);
    const [ renderElements, setRenderElements]            = useState(null);
    const [ renderPastElements, setRenderPastElements]    = useState(null);
    const [ waitingElements, setWaitingElements ]         = useState(true);
    const [ waitingPastElements, setWaitingPastElements ] = useState(true);

    // api call
    async function apiCurrentCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUES + '/current')
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
        await api.getAxiosEndpoint(endpoints.API_LEAGUES + '/past')
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

    return (
        <>
            <Layout name="home">
                <div className="left w100 mt20">
                    {waitingElements === true ? (
                            <Spinner></Spinner>
                        ) : (
                            <>
                                {renderElements != null && (
                                    <ListLink url="/leagues/" items={renderElements} />
                                )}
                            </>
                        )
                    }
                    <h2 className="mt40 ml33">Past Events</h2>
                    {waitingPastElements === true ? (
                            <Spinner></Spinner>
                        ) : (
                            <>
                                {renderPastElements != null && (
                                    <ListLink url="/leagues/" items={renderPastElements} />
                                )}
                            </>
                        )
                    }
                </div>
            </Layout>
        </>
    );
}

export default Home;