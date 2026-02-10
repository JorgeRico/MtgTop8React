import ListLeague from "/src/components/List/League/Normal";
import BluredLeagueList from "/src/components/List/League/Fake";
import SubTitle from "/src/components/HTag/SubTitle";
import endpoints from "/src/services/endpoints.jsx";
import { useState, useEffect } from "react";
import { getAxiosEndpoint } from '/src/hooks/useApi.jsx';

function Events(props) {
    const { title }                                       = props;
    const [ currentLeagues, setCurrentLeagues ]           = useState(null);
    const [ showCurrentElements, setShowCurrentElements ] = useState(false);

    useEffect(() => {
        async function apiCallCurrent() {
            await getAxiosEndpoint(endpoints.API_LEAGUE_CURRENT)
            .then((response) => {
                setCurrentLeagues(response.data);
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
            </section>
        </>
    );
}

export default Events;