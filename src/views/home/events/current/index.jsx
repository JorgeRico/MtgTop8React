import ListLeague from "/src/components/List/League/Normal";
import BluredLeagueList from "/src/components/List/League/Fake";
import SubTitle from "/src/components/HTag/SubTitle";
import endpoints from "/src/services/endpoints.jsx";
import { useState, useEffect } from "react";
import { getAxiosEndpoint } from '/src/hooks/useApi.jsx';
import Pagination from "/src/components/List/Pagination";
import { useTranslation } from 'react-i18next';
import Trophy from "/src/assets/images/trophy.webp";

function Events({ title }) {
    const [ currentLeagues, setCurrentLeagues ]           = useState(null);
    const [ showCurrentElements, setShowCurrentElements ] = useState(false);
    const [ totalLeagues, setTotalLeagues ]               = useState(0);
    const [ currentPage, setCurrentPage ]                 = useState(1);
    const { t }                                           = useTranslation();

    useEffect(() => {
        async function apiCallCurrent() {
            await getAxiosEndpoint(endpoints.API_LEAGUE_CURRENT)
            .then((response) => {
                setCurrentLeagues(response.data);
                setTotalLeagues(response.data.length);
                setShowCurrentElements(true);
            })
            .catch((err) => { 
                console.log('Error')
            });
        }

        apiCallCurrent();
    }, []);

    return (
        <>
            <section>
                <div className="left w100 mb20 grey-bottom">
                    <div className="left mt15 mr10">
                        <img src={Trophy} width="32" height="32" alt={t('seo-tags.current-leagues.text-description')} />
                    </div>
                    <SubTitle title={title} />
                    <p className="left w100 mt0 color-gray">{t('seo-tags.current-leagues.text-description')}</p>
                </div>
                {showCurrentElements === false ? (
                        <BluredLeagueList></BluredLeagueList>
                    ) : (
                        <>
                            {currentLeagues != null && (
                                <ListLeague url={endpoints.HTTP_LEAGUE} items={currentLeagues} isBlured={false} />
                            )}
                        </>
                    )
                }
                {totalLeagues &&
                    <Pagination text={t('seo-tags.current-leagues.pagination')} total={totalLeagues} itemsPerPage={totalLeagues} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
                }
            </section>
        </>
    );
}

export default Events;