import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Template from "/src/views/layout/template";
import LeagueTournamentList from "/src/components/List/League/Tournament/List";
import Stats from "/src/views/stats";
import endpoints from "/src/services/endpoints.jsx";
import { getAxiosEndpoint, replaceUrlIdParam } from '/src/hooks/useApi.jsx';
import { getFormat } from '/src/hooks/useCommon.jsx';
import Breadcrumb from "/src/components/Breadcrumb";
import SimpleBreadcrumb from "/src/components/Breadcrumb/Simple";

function League() {
    const { id }                                = useParams();
    const [ leagueName, setLeagueName]          = useState(null);
    const [ showLeagueName, setShowLeagueName ] = useState(false);
    const [ leagueFormat, setLeagueFormat]      = useState(null);

    useEffect(() => {
        async function apiCall() {
            await getAxiosEndpoint(replaceUrlIdParam(endpoints.API_LEAGUE_ID, id))
                .then((response) => {
                    setLeagueName(response.data.name);
                    setLeagueFormat(getFormat(response.data.isLegacy));
                    setShowLeagueName(true);
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
                title       = {`Mtg Stats - Legacy League: ${leagueName}`}
                canonical   = {`leagues/${id}`}
                description = "League - Catalan MTG Legacy leagues, tournaments, players and cards"
                breadcrumb  = {
                    <Breadcrumb 
                        loading   = {showLeagueName}
                        component = {<SimpleBreadcrumb title={leagueName} />}
                    />
                }
                tournament  = {
                    <LeagueTournamentList 
                        id     = {id}
                        format = {leagueFormat}
                    />
                }
                stats = {
                    <Stats 
                        id       = {id}
                        isLeague = {true}
                    />
                }
                templateTitle = "Season Stats"
            />                    
        </>
    );
}                        

export default League;