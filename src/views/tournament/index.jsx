import React from "react";
import { useParams } from 'react-router-dom';
import Layout from "/src/views/layout/core";
import Template from "/src/views/layout/template";
import TournamentPlayers from "/src/views/tournament/players";
import TournamentStats from "/src/views/tournament/stats";
import TournamentTitle from "/src/views/tournament/title";

function Tournament() {
    const { id } = useParams();

    return (
        <>
            <Layout name="tournaments">
                <Template
                    breadcrumb={<TournamentTitle id={id}></TournamentTitle>}
                    tournament={<TournamentPlayers id={id}></TournamentPlayers>}
                    stats={<TournamentStats id={id}></TournamentStats>}
                />                    
            </Layout>
        </>
    );
}

export default Tournament;