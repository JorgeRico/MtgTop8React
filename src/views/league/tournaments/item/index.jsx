import React from "react";
import TournamentList from "/src/components/List/Normal/Tournament";
import SubTitle from "/src/components/HTag/SubTitle";

function LeagueTournamentItem(props) {
    const { format, renderElements, url } = props;

    return (
        <>
            <div className="left w100 mb30">
                <SubTitle title={"Tournaments"}/>
                <div className="left w100 f14 mt5">Format: {format}</div>
            </div>
            {renderElements != null && (
                <div className="left w100">
                    <TournamentList url={url} items={renderElements}/>
                </div>
            )}
        </>    
    )
}

export default LeagueTournamentItem;