import React, { useRef, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Layout from "/src/views/layout/core";
import Template from "/src/views/layout/template";
import LeagueTournamentList from "/src/components/List/League/Tournament/List";
import Stats from "/src/views/stats";
import endpoints from "/src/services/endpoints.js";
import { useApi } from '/src/hooks/use-api.js';
import Breadcrumb from "/src/components/Breadcrumb";
import SeoTags from "/src/hooks/use-seo.jsx";

function League() {
    const { id }                                = useParams();
    const api                                   = useApi();
    const effectRan                             = useRef(false);
    const [ leagueName, setLeagueName]          = useState(null);
    const [ showLeagueName, setShowLeagueName ] = useState(false);
    const [ leagueFormat, setLeagueFormat]      = useState(null);

    // api call
    async function apiCall() {
        await api.getAxiosEndpoint(endpoints.API_LEAGUE_ID.replace('{id}', id))
            .then((response) => {
                setLeagueName(response.data.name);
                setLeagueFormat(api.getFormat(response.data.isLegacy));
                setShowLeagueName(true);
            })
            .catch((err) => { 
                console.log(err)
                console.log('error league id')
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
            {leagueName &&
                <SeoTags page="LEAGUE" id={id} name={leagueName}></SeoTags>
            }
            <Layout name="league">
                <Template 
                    breadcrumb={
                        <Breadcrumb
                            title={leagueName} 
                            loading={showLeagueName}
                            endpoint={null}
                            isLeague={true}
                        />
                    }
                    tournament={
                        <LeagueTournamentList 
                            id={id}
                            format={leagueFormat}
                        />
                    }
                    stats={
                        <Stats 
                            id={id}
                            isLeague={true} 
                            endpoint={endpoints.API_LEAGUE_STATS} 
                            endpointCards={endpoints.API_LEAGUE_CARD_STATS}
                        />
                    }
                    title="Season Stats"
                />                    
            </Layout>
        </>
    );
}                        

export default League;