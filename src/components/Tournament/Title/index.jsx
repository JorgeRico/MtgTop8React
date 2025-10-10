import React from "react";
import HTag from "/src/components/HTag";

function TournamentTitle(props) {
    const { tournament, isBlured } = props

    return (
        <>
            <div className={`left w100 mt20 pb0 ${isBlured ? "blink blured" : ""}`}>
                <div className="left">
                    <HTag Tag="h1" text={tournament.name} className="left f24 mb5" />
                </div>
                <div className="left w100">
                    <div className="left">{tournament.format}</div>
                    <div className="left ml10"> | </div>
                    <div className="left ml10">{tournament.players} players</div>
                    <div className="left ml10"> | </div>
                    <div className="left ml10">{tournament.date}</div>
                </div>
            </div>
        </>
    )
}

export default TournamentTitle;