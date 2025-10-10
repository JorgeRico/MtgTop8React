import React from "react";
import Title from "/src/components/Tournament/Title";

function TournamentTitleBlured() {
    const tournament = {
        name    : 'Fake Tournament',
        format  : 'Legacy',
        players : '35',
        date    : '22/10/2025'
    }
    
    return (
        <>
            <Title tournament={tournament} isBlured={true}></Title>
        </>
    )
}

export default TournamentTitleBlured;