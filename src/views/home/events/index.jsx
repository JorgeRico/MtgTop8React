import React from "react";
import endpoints from "/src/services/endpoints.js";
import ListLeague from "/src/components/List/League/Normal";
import BluredLeagueList from "/src/components/List/League/Fake";
import SubTitle from "/src/components/HTag/SubTitle";

function Events(props) {
    const { elements, title, showElements } = props;

    return (
        <>
            <section>
                <div className="left w100 mb20 grey-bottom">
                    <SubTitle title={title} />
                </div>
                {showElements === true ? (
                        <BluredLeagueList></BluredLeagueList>
                    ) : (
                        <>
                            {elements != null && (
                                <ListLeague url={endpoints.HTTP_LEAGUE} items={elements} isBlured={false} />
                            )}
                        </>
                    )
                }
            </section>
        </>
    );
}

export default Events;