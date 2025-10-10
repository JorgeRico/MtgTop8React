import React from "react";
import LeagueTournamentBlock from "/src/components/List/League/Tournament/Block";
import tournament from "/src/fakeData/tournament.js";

function BluredTournamentList() {
    return (
        <>
            <LeagueTournamentBlock
                format         = {tournament.format}
                renderElements = {tournament.items}
                url            = {tournament.url}
                isBlured       = {true}
            />
        </>
    )
}

export default BluredTournamentList; 