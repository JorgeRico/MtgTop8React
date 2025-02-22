import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import { useParams } from 'react-router-dom';
import ListLink from "/src/components/List/Link";
import BackLink from "/src/components/Link/BackLink";
import Layout from "/src/views/layout";
import StatsBox from "/src/components/Stats/League";
import HTag from "/src/components/HTag";
import Spinner from "/src/components/Spinner";

function League() {
    const api                                   = useApi();
    const effectRan                             = useRef(false);
    const [ leagueName, setLeagueName]          = useState(null);
    const [ renderElements, setRenderElements]  = useState(null);
    const { id }                                = useParams();
    const [ showLeagueName, setShowLeagueName ] = useState(false);
    const [ showElements, setShowElements ]     = useState(false);
    
    // api call
    async function apiCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUES + '/' + id)
            .then((response) => {
                setLeagueName(response.data.name);
                setShowLeagueName(true);
            })
            .catch((err) => { 
                console.log(err)
                console.log('error league id')
            });

        await api.getAxiosEndpoint(endpoints.API_LEAGUES + '/' + id + '/tournaments')
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
            <Layout name="league">
                {showLeagueName == true ? (
                    <Spinner></Spinner>
                ) : (
                    <BackLink endpoint={endpoints.API_HOME} title={leagueName}></BackLink>
                )}
                 <div className="left w100">
                    {showElements === false ? (
                        <Spinner></Spinner>
                    ) : (
                        <>
                            {renderElements != null && (
                                <div className="left w100">
                                    <ListLink url="/tournaments/" items={renderElements}/>
                                </div>
                            )}
                        </>
                    )}
                    <HTag Tag="h3" text="Stats" className="left ml15 titlePadding" />
                    <div className="left w100 ml25 mt10">
                        {showElements === false ? (
                                <Spinner></Spinner>
                            ) : (
                                <StatsBox></StatsBox>
                            )
                        }
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default League;