import React from "react";
import LeagueTournamentItem from "/src/views/league/tournaments/item";

function BluredTournamentList() {
    const url = "#";
    const format = "Legacy";
    const items = [
        {
            "id": 28,
            "name": "Lliga Minoria 2025",
            "date": "25/01/25",
            "idLeague": 4,
            "players": 29,
            "format": 1
        },
        {
            "id": 29,
            "name": "Lliga Minoria 2025",
            "date": "22/02/25",
            "idLeague": 4,
            "players": 25,
            "format": 1
        },
        {
            "id": 30,
            "name": "Lliga Minoria 2025",
            "date": "29/03/25",
            "idLeague": 4,
            "players": 23,
            "format": 1
        }
    ];

    return (
        <>
            <div className="blink blured">
            <LeagueTournamentItem
                format         = {format}
                renderElements = {items}
                url            = {url}
                />
            </div>
        </>
    )
}

export default BluredTournamentList;



 