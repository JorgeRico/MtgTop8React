import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
import cupIcon from '/src/assets/images/cup.png';
import Button from "/src/components/List/Button";
import { getFormat } from '/src/hooks/useCommon.jsx';

export default function LeagueList({ url, items, isBlured }) {
    const leagueItemBlock = (icon, name, format, buttonText) => { 
        return (
            <>
                <div className="left w100 mb10 bg-footer">
                    <div className="wAuto padBox overflowHidden border-red">
                        <div className="cupBox border-grey left radius5 bg-red p5 w-25">
                            <img src={icon} width="15" height="14" alt="Cup Champion" className="cupIcon w-15" />
                        </div>
                        <div className="left format wAuto ml25 tournamentDescription">
                            <strong>{name}</strong>
                            <br></br>
                            <span className="left f12 mt5" style={{whiteSpace: 'pre-wrap'}}>
                                {format}
                            </span>
                        </div>
                        <Button buttonText={buttonText}></Button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <section className={`left w100 overflowHidden ${isBlured ? 'blink blured' : ''}`}>
                {(items?.length > 0) && (
                    items?.map((item) => (
                        <article className="listItem pointer title mb15 overflowHidden" key={uuidv4()}>
                            <Link to={url + item.id}>
                                {leagueItemBlock(cupIcon, item.name, `Format: ${getFormat(item.isLegacy)}`, "View league")}
                            </Link>
                        </article>
                    ))
                )}
            </section>
        </>
    )
}