import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import { useParams } from 'react-router-dom';
import TournamentLink from "/src/components/List/Tournament";
import Layout from "/src/views/layout";
import StatsBox from "/src/components/Stats/League";
import Title from "/src/components/HTag/Title";
import BluredBigList from "/src/components/Blured/FakeLists/BigList";
import BluredBreadcrumb from "/src/components/Blured/Breadcrumb";
import BreadcrumbLeague from "components/Breadcrumb/League";

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
        await api.getAxiosEndpoint(endpoints.API_LEAGUE_ID.replace('{id}', id))
            .then((response) => {
                setLeagueName(response.data.name);
                setShowLeagueName(true);
            })
            .catch((err) => { 
                console.log(err)
                console.log('error league id')
            });
            

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

    const showTitle = () => {
        return (
            <>
                {showLeagueName === false ? (
                    <BluredBreadcrumb></BluredBreadcrumb>
                ) : (
                    <BreadcrumbLeague title={leagueName} endpoint={endpoints.API_LEAGUE}></BreadcrumbLeague>
                )}
            </>
        )
    }

    const showTournaments = () => {
        return (
            <>
                {showElements === false ? (
                        <BluredBigList></BluredBigList>
                    ) : (
                    <>
                        {renderElements != null && (
                            <div className="left w100">
                                <TournamentLink url={endpoints.API_TOURNAMENT} items={renderElements}/>
                            </div>
                        )}
                    </>
                )}
            </>
        )
    }

    const showStats = () => {
        return (
            <>
                <div className="left w100 mt10">
                    {showElements === false ? (
                            <BluredBigList></BluredBigList>
                        ) : (
                            <StatsBox></StatsBox>
                        )
                    }
                </div>
            </>
        )
    }

    return (
        <>
            <Layout name="league">
                {showTitle()}
                 <div className="left w100 mt10">
                    {showTournaments()}
                    <Title title="Season Stats" />                    
                    {showStats()}
                </div>
            </Layout>
        </>
    );
}

export default League;