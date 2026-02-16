import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Template from "/src/views/layout/template";
import LeagueTournamentList from "/src/components/List/League/Tournament/List";
import Stats from "/src/views/stats";
import endpoints from "/src/services/endpoints.jsx";
import { getAxiosEndpoint, replaceUrlIdParam } from '/src/hooks/useApi.jsx';
import { getFormat } from '/src/hooks/useCommon.jsx';
import Breadcrumb from "/src/components/Breadcrumb";
import BreadcrumbLeague from "/src/components/Breadcrumb/League";
import { useTranslation } from 'react-i18next';

function League() {
    const { id }                                = useParams();
    const [ leagueName, setLeagueName]          = useState(null);
    const [ showLeagueName, setShowLeagueName ] = useState(false);
    const [ leagueFormat, setLeagueFormat ]     = useState(null);
    const [ location, setLocation ]             = useState(null);
    const [ locationName, setLocationName ]     = useState(null);
    const [ year, setYear ]                     = useState(null);
    const { t }                                 = useTranslation();
    
    useEffect(() => {
        async function apiCall() {
            await getAxiosEndpoint(replaceUrlIdParam(endpoints.API_LEAGUE_ID, id))
                .then((response) => {
                    setLeagueName(response.data.name);
                    setLeagueFormat(getFormat(response.data.isLegacy));
                    setShowLeagueName(true);
                    setLocation(response.data.location);
                    setLocationName(response.data.locationName);
                    setYear(response.data.year);
                })
                .catch((err) => { 
                    console.log(err)
                    console.log('error league id')
                });
        }
            
        apiCall();
    }, []);

    return (
        <>
            <Template 
                name        = "league"
                title       = {`${t('seo-tags.leagues.title')}: ${leagueName}`}
                canonical   = {`leagues/${id}`}
                description = {t('seo-tags.leagues.description')}
                breadcrumb  = {
                    <Breadcrumb 
                        loading   = {showLeagueName}
                        component = {<BreadcrumbLeague title={`${leagueName} ${year}`} />}
                    />
                }
                tournament  = {
                    <LeagueTournamentList 
                        id           = {id}
                        format       = {leagueFormat}
                        leagueName   = {leagueName}
                        location     = {location}
                        locationName = {locationName}
                    />
                }
                stats = {
                    <Stats 
                        id       = {id}
                        isLeague = {true}
                        title    = {`${t('seo-tags.leagues.stats')} ${leagueName ? ' - ' + leagueName : ''}`}
                    />
                }
            />                    
        </>
    );
}                        

export default League;