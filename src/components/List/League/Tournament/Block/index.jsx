import TournamentList from "/src/components/List/Tournament/Normal";
import HTag from "/src/components/HTag";

function LeagueTournamentBlock({ leagueName, format, renderElements, url, isBlured, numPlayers, classification }) {
    return (
        <>
            <div className={`left w100 mb40 ${isBlured ? 'blink blured' : ''}`}>
                <div className="left">
                    {leagueName &&
                        <HTag Tag="h1" text={`Tournaments - ${leagueName}`} className="left f24 mb5" />
                    }
                </div>
                <div className="left w100 f14">Format: {format}</div>
                <div className="left w100 f14 mt5">Average Players: {numPlayers}</div>
                {/* <div className="left w100 f14 mt5">Location: location</div> */}
                {classification != null && (
                    <div className="left w100 f14 mt5">Classification: {classification}</div>
                )}
            </div>
            <div className={`left w100 mb10 ${isBlured ? 'blink blured' : ''}`}>
                <TournamentList url={url} items={renderElements}/>
            </div>
        </>    
    )
}

export default LeagueTournamentBlock;