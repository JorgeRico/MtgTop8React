import React from "react";
import { useParams } from 'react-router-dom';
import Layout from "/src/views/layout/core";
import Template from "/src/views/layout/template";
import LeagueTournament from "/src/views/league/tournaments";
import LeagueStats from "/src/views/league/stats";
import LeagueBreadcrumb from "/src/views/league/breadcrumb";

function League() {
    const { id } = useParams();

    return (
        <>
            <Layout name="league">
                <Template
                    breadcrumb={<LeagueBreadcrumb id={id}></LeagueBreadcrumb>}
                    tournament={<LeagueTournament id={id}></LeagueTournament>}
                    stats={<LeagueStats id={id}></LeagueStats>}
                />                    
            </Layout>
        </>
    );
}

export default League;