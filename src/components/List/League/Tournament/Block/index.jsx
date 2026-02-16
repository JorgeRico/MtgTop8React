import TournamentList from "/src/components/List/Tournament/Normal";
import HTag from "/src/components/HTag";
import LocationImage from "/src/components/Icons/Location";
import { Link } from 'react-router-dom';

function LeagueTournamentBlock({ leagueName, format, renderElements, url, isBlured, numPlayers, classification, location, locationName }) {
    const getLocation = () => {
        return (
            <div className="left w100 f14 mb5">
                <Link to={`https://maps.app.goo.gl/${location}`} className="" target="_blank" rel="noopener noreferrer" title="">
                    <HTag 
                        Tag  = "p" 
                        text = {
                            <>  
                                <span className="left mr5">Location:</span>
                                <LocationImage></LocationImage>
                                <span className="left ml5">{locationName}</span>
                            </>
                        } 
                    />
                </Link>
            </div>
        )
    }
    return (
        <>
            <div className={`left w100 mt40 mb40 ${isBlured ? 'blink blured' : ''}`}>
                <div className="left">
                    {leagueName &&
                        <HTag Tag="h1" text={`Tournaments - ${leagueName}`} className="left f24 mb5" />
                    }
                </div>
                {location != null && getLocation()}
                <div className="left w100 f14">Format: {format}</div>
                <div className="left w100 f14 mt5">Average Players: {numPlayers}</div>
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