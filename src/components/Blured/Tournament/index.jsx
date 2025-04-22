import React from "react";
import HTag from "/src/components/HTag";

function TournamentTitleBlured() {
    return (
        <>
            <div className="left w100 mt20 pb0">
                <div className="left">
                    <HTag Tag="h1" text="Fake tournament name" className="f20" />
                </div>
                <div className="left w100">Date: 22/10/2025</div>
                <div className="left w100">Players: 30</div>
                <div className="left w100 mt20">
                    <HTag Tag="h2" text={"Top Players"} className="left f20" />
                </div>
            </div>
        </>
    )
}

export default TournamentTitleBlured;