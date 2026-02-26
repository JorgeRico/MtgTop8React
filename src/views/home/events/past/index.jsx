import ListLeague from "/src/components/List/League/Normal";
import BluredLeagueList from "/src/components/List/League/Fake";
import SubTitle from "/src/components/HTag/SubTitle";
import endpoints from "/src/services/endpoints.jsx";
import { useState, useEffect } from "react";
import { getAxiosEndpoint, addUrlPaginationParams } from '/src/hooks/useApi.jsx';
import Pagination from "/src/components/List/Pagination";
import { useTranslation } from 'react-i18next';
import Trophy from "/src/assets/images/trophy.webp";

function PastEvents({ title }) {
    const [ pastLeagues, setPastLeagues ]           = useState(null);
    const [ showPastElements, setShowPastElements ] = useState(false);
    const [ totalPastLeagues, setTotalPastLeagues ] = useState(0);
    const numItems                                  = 5;
    const [ currentPage, setCurrentPage ]           = useState(1);
    const { t }                                     = useTranslation();

    useEffect(() => {
        async function apiCallPast() {
            setShowPastElements(false);
            setPastLeagues(null);

            await getAxiosEndpoint(addUrlPaginationParams(endpoints.API_LEAGUE_PAST, numItems, currentPage))
            .then((response) => {
                setPastLeagues(response.data.leagues);
                setTotalPastLeagues(response.data.total)
                setShowPastElements(true);
            })
            .catch((err) => { 
                console.log(err);
                console.log('Error')
            });
        }
        
        apiCallPast();
    }, [currentPage]);

    return (
        <>
            <section>
                <div className="left w100 mt20 mb20 grey-bottom">
                    <div className="left mt15 mr10">
                        <img src={Trophy} width="32" height="32" alt={t('seo-tags.current-leagues.text-description')} />
                    </div>
                    <SubTitle title={title} />
                    <p className="left w100 mt0 color-gray">{t('seo-tags.past-leagues.text-description')}</p>
                </div>
                {showPastElements === false ? (
                        <BluredLeagueList></BluredLeagueList>
                    ) : (
                        <>
                            {totalPastLeagues != null && (
                                <ListLeague url={endpoints.HTTP_LEAGUE} items={pastLeagues} isBlured={false} />                                    
                            )}
                        </>
                    )
                }
                {totalPastLeagues > 0 &&
                    <Pagination text={t('seo-tags.past-leagues.pagination')} total={totalPastLeagues} itemsPerPage={numItems} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
                }
            </section>
        </>
    );
}

export default PastEvents;