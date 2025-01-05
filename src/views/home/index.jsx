import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import ListLink from "/src/components/List/Link";
import Layout from "/src/views/layout";

function Home() {
    const api       = useApi();
    const effectRan = useRef(false);
    const [ renderElements, setRenderElements]  = useState(null);

    // api call
    async function apiCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUES)
        .then((response) => {
            setRenderElements(response.data);
        })
        .catch((err) => { 
            console.log('error')
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
            <Layout name="home">
                <div className="left w100 mt20">
                    {renderElements != null && (
                        <ListLink url="/leagues/" items={renderElements} />
                    )}
                </div>
            </Layout>
        </>
    );
}

export default Home;