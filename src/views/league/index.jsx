import React from "react";
import { useParams } from 'react-router-dom';
import Layout from "/src/views/layout";
import LeagueTournament from "/src/views/league/tournaments";
import LeagueStats from "/src/views/league/stats";
import LeagueBreadcrumb from "/src/views/league/breadcrumb";

function League() {
    const { id } = useParams();

    return (
        <>
            <Layout name="league">
                <LeagueBreadcrumb id={id}></LeagueBreadcrumb>
                <div className="left w100 mt20">
                    <LeagueTournament id={id}></LeagueTournament>
                </div>
                <div className="left w100 mt10">
                    <LeagueStats id={id}></LeagueStats>
                </div>
            </Layout>
        </>
    );
}

export default League;