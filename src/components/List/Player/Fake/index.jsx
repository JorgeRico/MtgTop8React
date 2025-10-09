import React from "react";
import PlayerList from "/src/components/List/Player/Normal";
import players from "/src/fakeData/playerList.js";

function TournamentPlayersBlured() {
    return (
        <>
            <PlayerList items={players} isBlured={true} />
        </>
    )
}

export default TournamentPlayersBlured;