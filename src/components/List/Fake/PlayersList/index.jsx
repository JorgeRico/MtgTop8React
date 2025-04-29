import React from "react";
import PlayerList from "/src/components/List/Normal/Player";
import players from "/src/fakeData/playerList.js";

function TournamentPlayersBlured() {
    return (
        <>
            <div className="blink blured">
                <PlayerList items={players} />
            </div>
        </>
    )
}

export default TournamentPlayersBlured;