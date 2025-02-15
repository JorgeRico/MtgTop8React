import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import ListLink from "/src/components/List/Link";
import Layout from "/src/views/layout";

function Home() {
    const api                                          = useApi();
    const effectRan                                    = useRef(false);
    const [ renderElements, setRenderElements]         = useState(null);
    const [ renderPastElements, setRenderPastElements] = useState(null);


    // api call
    async function apiCurrentCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUES + '/current')
        .then((response) => {
            console.log(response.data)
            setRenderElements(response.data);
        })
        .catch((err) => { 
            console.log('error')
        });
    }

    // api call
    async function apiPastCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUES + '/past')
        .then((response) => {
            console.log(response.data)
            setRenderPastElements(response.data);
        })
        .catch((err) => { 
            console.log('error')
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
                    {renderElements != null && (
                        <ListLink url="/leagues/" items={renderElements} />
                    )}
                    <h2 className="mt40 ml33">Past Events</h2>
                    {renderPastElements != null && (
                        <ListLink url="/leagues/" items={renderPastElements} />
                    )}
                </div>
            </Layout>
        </>
    );
}

export default Home;