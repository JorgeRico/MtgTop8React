import React from "react";
import endpoints from "/src/services/endpoints.js"
import Layout from "/src/views/layout";
import Events from "/src/views/home/events";

function Home() {
    return (
        <>
            <Layout name="home">
                <div className="left w100 mt20">
                    <Events endpoint={endpoints.API_LEAGUE_CURRENT} title="Current Events"></Events>
                    <Events endpoint={endpoints.API_LEAGUE_PAST} title="Past Events"></Events>
                </div>
            </Layout>
        </>
    );
}

export default Home;