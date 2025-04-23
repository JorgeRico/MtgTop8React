import React from "react";
import HTag from "/src/components/HTag";
import TournamentTitleBlured from "/src/components/Blured/Tournament";

function TournamentTitle(props) {
    const { tournament, loading } = props

    return (
        <>
            {loading === false ? (
                <TournamentTitleBlured></TournamentTitleBlured>
            ) : (
                <>
                    <div className="left w100 mt20 pb0">
                        <div className="left">
                            <HTag Tag="h1" text={tournament.name} className="left f24 mb5" />
                        </div>
                        <div className="left w100">
                            <div className="left">Legacy</div>
                            <div className="left ml10"> | </div>
                            <div className="left ml10">{tournament.players} players</div>
                            <div className="left ml10"> | </div>
                            <div className="left ml10">{tournament.date}</div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default TournamentTitle;