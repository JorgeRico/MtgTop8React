import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import { useParams } from 'react-router-dom';
import ListLink from "/src/components/List/Link";
import BackLink from "/src/components/Link/BackLink";
import Layout from "/src/views/layout";
import StatsBox from "/src/components/Stats/League";
import HTag from "/src/components/HTag";

function League() {
    const api                                  = useApi();
    const effectRan                            = useRef(false);
    const [ leagueName, setLEagueName]         = useState(null);
    const [ renderElements, setRenderElements] = useState(null);
    const { id }                               = useParams();
    
    // api call
    async function apiCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUES + '/' + id)
            .then((response) => {
                setLEagueName(response.data.name)
            })
            .catch((err) => { 
                console.log('error')
            });

        await api.getAxiosEndpoint(endpoints.API_LEAGUES + '/' + id + '/tournaments')
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
    }, []);

    return (
        <>
            <Layout name="league">
                <BackLink endpoint={endpoints.API_HOME} title={leagueName}></BackLink>
                 <div className="left w100">
                    {renderElements != null && (
                        <div className="left w100">
                            <ListLink url="/tournaments/" items={renderElements}/>
                        </div>
                    )}
                    <HTag Tag="h3" text="Stats" className="left w100 ml25" />
                    <div className="left w100 ml25 mt10">
                        <StatsBox></StatsBox>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default League;