import ListLeague from "/src/components/List/League/Normal";
import BluredLeagueList from "/src/components/List/League/Fake";
import SubTitle from "/src/components/HTag/SubTitle";
import endpoints from "/src/services/endpoints.jsx";
import { useState, useEffect } from "react";
import { getAxiosEndpoint, addUrlPaginationParams } from '/src/hooks/useApi.jsx';
import Pagination from "/src/components/List/Pagination";

function PastEvents({ title }) {
    const [ pastLeagues, setPastLeagues ]           = useState(null);
    const [ showPastElements, setShowPastElements ] = useState(false);
    const [ totalPastLeagues, setTotalPastLeagues ] = useState(0);
    const numItems                                  = 5;
    const [ currentPage, setCurrentPage ]           = useState(1);

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
                    <SubTitle title={title} />
                    <p className="left w100 mt0 color-gray">Explore past leagues, view standings and decks</p>
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
                    <Pagination text="Past Leagues" total={totalPastLeagues} itemsPerPage={numItems} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
                }
            </section>
        </>
    );
}

export default PastEvents;