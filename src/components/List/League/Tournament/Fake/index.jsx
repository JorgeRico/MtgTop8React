import React from "react";
import LeagueTournamentBlock from "/src/components/List/League/Tournament/Block";
import tournament from "/src/fakeData/tournament.jsx";

function BluredTournamentList() {
    return (
        <>
            <LeagueTournamentBlock
                format         = {tournament.format}
                renderElements = {tournament.items}
                url            = {tournament.url}
                isBlured       = {true}
                numPlayers     = {9999}
            />
        </>
    )
}

export default BluredTournamentList; 