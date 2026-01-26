import React from "react";
import TournamentList from "/src/components/List/Tournament/Normal";
import SubTitle from "/src/components/HTag/SubTitle";

function LeagueTournamentBlock(props) {
    const { format, renderElements, url, isBlured, numPlayers, classification } = props;

    return (
        <>
            <div className={`left w100 mb40 ${isBlured ? 'blink blured' : ''}`}>
                <SubTitle title={"Tournaments"}/>
                <div className="left w100 f14">Format: {format}</div>
                <div className="left w100 f14 mt5">Average Players: {numPlayers}</div>
                {classification != null && (
                    <div className="left w100 f14 mt5">Classification: {classification}</div>
                )}
            </div>
            {renderElements != null && (
                <div className={`left w100 ${isBlured ? 'blink blured' : ''}`}>
                    <TournamentList url={url} items={renderElements}/>
                </div>
            )}
        </>    
    )
}

export default LeagueTournamentBlock;