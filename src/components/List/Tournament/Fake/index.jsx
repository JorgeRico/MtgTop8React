import React from "react";
import LeagueTournamentItem from "/src/views/league/tournaments/item";
import tournament from "/src/fakeData/tournament.js";

function BluredTournamentList() {
    return (
        <>
            <div className="blink blured">
                <LeagueTournamentItem
                    format         = {tournament.format}
                    renderElements = {tournament.items}
                    url            = {tournament.url}
                />
            </div>
        </>
    )
}

export default BluredTournamentList; 