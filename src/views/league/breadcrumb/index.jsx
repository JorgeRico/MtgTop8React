import React, { useRef, useState, useEffect } from "react";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import BluredBreadcrumb from "/src/components/Blured/Breadcrumb";
import BreadcrumbLeague from "components/Breadcrumb/League";

function LeagueBreadcrumb(props) {
    const api                                   = useApi();
    const effectRan                             = useRef(false);
    const [ leagueName, setLeagueName]          = useState(null);
    const { id }                                = props;
    const [ showLeagueName, setShowLeagueName ] = useState(false);
    
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
            {showLeagueName === false ? (
                <BluredBreadcrumb></BluredBreadcrumb>
            ) : (
                <BreadcrumbLeague title={leagueName} endpoint={endpoints.API_LEAGUE}></BreadcrumbLeague>
            )}
        </>
    )
}

export default LeagueBreadcrumb;