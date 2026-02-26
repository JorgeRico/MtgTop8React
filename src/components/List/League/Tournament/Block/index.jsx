import TournamentList from "/src/components/List/Tournament/Normal";
import HTag from "/src/components/HTag";
import LocationImage from "/src/components/Icons/Location";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Trophy from "/src/assets/images/trophy.webp";

function LeagueTournamentBlock({ leagueName, format, renderElements, url, isBlured, numPlayers, classification, location, locationName }) {
    const { t } = useTranslation();

    const getLocation = () => {
        return (
            <div className="left w100 f14 mb5">
                <Link to={`https://maps.app.goo.gl/${location}`} className="" target="_blank" rel="noopener noreferrer" title="">
                    <HTag 
                        Tag  = "p" 
                        text = {
                            <>  
                                <span className="left mr5">{t('league.tournament.Location')}:</span>
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
                    <div className="left mr10">
                        <img src={Trophy} width="32" height="32" alt={`${t('league.tournament.Tournaments')} - ${leagueName}`} />
                    </div>
                         
                    {leagueName &&
                        <HTag Tag="h1" text={`${t('league.tournament.Tournaments')} - ${leagueName}`} className="left f24 mb5" />
                    }
                </div>
                {location != null && getLocation()}
                <div className="left w100 f14">{t('league.tournament.Format')}: {format}</div>
                <div className="left w100 f14 mt5">{t('league.tournament.Average Players')}: {numPlayers}</div>
                {classification != null && (
                    <div className="left w100 f14 mt5">{t('league.tournament.Classification')}: {classification}</div>
                )}
            </div>
            <div className={`left w100 mb10 ${isBlured ? 'blink blured' : ''}`}>
                <TournamentList url={url} items={renderElements}/>
            </div>
        </>    
    )
}

export default LeagueTournamentBlock;