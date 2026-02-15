import ListLeague from "/src/components/List/League/Normal";
import BluredLeagueList from "/src/components/List/League/Fake";
import SubTitle from "/src/components/HTag/SubTitle";
import endpoints from "/src/services/endpoints.jsx";
import { useState, useEffect } from "react";
import { getAxiosEndpoint } from '/src/hooks/useApi.jsx';
import Pagination from "/src/components/List/Pagination";

function Events({ title }) {
    const [ currentLeagues, setCurrentLeagues ]           = useState(null);
    const [ showCurrentElements, setShowCurrentElements ] = useState(false);
    const [ totalLeagues, setTotalLeagues ]               = useState(0);
    const numItems                                        = 5;
    const [ currentPage, setCurrentPage ]                 = useState(1);

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
                    <SubTitle title={title} />
                    <p className="left w100 mt0 color-gray">Explore current leagues, view standings and decks</p>
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
                <Pagination text="Current Leagues" total={totalLeagues} itemsPerPage={numItems} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
            </section>
        </>
    );
}

export default Events;