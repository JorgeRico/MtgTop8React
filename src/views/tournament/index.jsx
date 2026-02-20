import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Template from "/src/views/layout/template";
import TournamentPlayers from "/src/components/Tournament/Players";
import Stats from "/src/views/stats";
import Breadcrumb from "/src/components/Breadcrumb";
import TournamentBreadcrumb from "/src/components/Breadcrumb/Tournament";
import endpoints from "/src/services/endpoints.jsx";
import { getAxiosEndpoint, replaceUrlIdParam } from '/src/hooks/useApi.jsx';
import { getFormat } from '/src/hooks/useCommon.jsx';
import { useTranslation } from 'react-i18next';

function Tournament() {
    const { id }                       = useParams();
    const [ tournament, setTournament] = useState({idLeague: '', name:'', date:'', players: ''});
    const [ loading, setLoading ]      = useState(false);
    const { t }                        = useTranslation();

    useEffect(() => {
        async function apiCall() {
            await getAxiosEndpoint(replaceUrlIdParam(endpoints.API_TOURNAMENT_DATA, id))
            .then((response) => {
                setTournament(prevState => ({
                    ...prevState,
                    'idLeague'   : response.data.idLeague,
                    'name'       : response.data.name,
                    'date'       : response.data.date,
                    'players'    : response.data.players,
                    'format'     : getFormat(response.data.format),
                    'year'       : response.data.year,
                    'leagueName' : response.data.leagueName

                }));
                setLoading(true);
            })
            .catch((err) => { 
                console.log('error tournamnet')
            });
        }

        apiCall();
    }, []);

    return (
        <>
            <Template
                name        = "tournaments"
                title       = {`${t('seo-tags.tournaments.title')}: ${tournament.name} - ${tournament.date}`}
                canonical   = {`tournaments/${id}`}
                description = {t('seo-tags.tournaments.description')}
                breadcrumb  = {
                    <Breadcrumb 
                        loading   = {loading}
                        component = {<TournamentBreadcrumb title={`${tournament.leagueName} ${tournament.year}`} date={tournament.date} endpoint={endpoints.HTTP_LEAGUE + tournament.idLeague} />}
                    />
                }
                tournament  = {
                    <TournamentPlayers 
                        id         = {id} 
                        tournament = {tournament}
                    />
                }
                stats = {
                    <Stats 
                        id       = {id}
                        isLeague = {false}
                        title    = {`${t('seo-tags.tournaments.stats')} - ${tournament.name}`}
                    />
                }
            />                    
        </>
    );
}                        

export default Tournament;