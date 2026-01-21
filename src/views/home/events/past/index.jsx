import ListLeague from "/src/components/List/League/Normal";
import BluredLeagueList from "/src/components/List/League/Fake";
import SubTitle from "/src/components/HTag/SubTitle";
import endpoints from "/src/services/endpoints.jsx";
import { useState, useEffect } from "react";
import { useApi } from '/src/hooks/useApi.jsx';
import Pagination from "/src/components/List/Pagination";

function PastEvents(props) {
    const { title }                                 = props;
    const api                                       = useApi();
    const [ pastLeagues, setPastLeagues ]           = useState(null);
    const [ showPastElements, setShowPastElements ] = useState(false);
    const [ totalPastLeagues, setTotalPastLeagues ] = useState(0);
    const numItems                                  = 5;
    const [ currentPage, setCurrentPage ]           = useState(1);
           
    useEffect(() => {
        async function apiCallPast() {
            setShowPastElements(false);
            setPastLeagues(null);

            await api.getAxiosEndpoint(`${endpoints.API_LEAGUE_PAST}?limit=${numItems}&page=${currentPage}`)
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
                <div className="left w100 mb20 mt20 grey-bottom">
                    <SubTitle title={title} />
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
                    <Pagination total={totalPastLeagues} itemsPerPage={numItems} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
                }
            </section>
        </>
    );
}

export default PastEvents;