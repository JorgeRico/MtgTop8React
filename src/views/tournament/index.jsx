import React from "react";
import { useParams } from 'react-router-dom';
import Layout from "/src/views/layout";
import TournamentPlayers from "/src/views/tournament/players";
import TournamentStats from "/src/views/tournament/stats";
import TournamentTitle from "/src/views/tournament/title";


function Tournament() {
    const { id } = useParams();

    return (
        <>
            <Layout name="tournaments">
                <TournamentTitle id={id}></TournamentTitle>
                <div className="left w100">
                    <TournamentPlayers id={id}></TournamentPlayers>
                    <TournamentStats id={id}></TournamentStats>
                </div>
            </Layout>
        </>
    );
}

export default Tournament;