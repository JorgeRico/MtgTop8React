import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
import cupIcon from '/src/assets/images/cup.png';
import Button from "/src/components/List/Button";
import { getFormat } from '/src/hooks/useCommon.jsx';
import { useTranslation } from 'react-i18next';

export default function LeagueList({ url, items, isBlured }) {
    const { t } = useTranslation();
    
    const leagueItemBlock = (item) => { 
        return (
            <>
                <div className="left w100 mb10 bg-footer">
                    <div className="wAuto padBox overflowHidden border-red">
                        <div className="cupBox border-grey left radius5 bg-red p5 w-25">
                            <img src={cupIcon} width="15" height="14" alt={t('alt-tags.Cup Champion')} className="cupIcon w-15" />
                        </div>
                        <div className="left format wAuto ml25 tournamentDescription">
                            <strong>{item.name} {item.year}</strong>
                            <br></br>
                            <span className="left f12 mt5" style={{whiteSpace: 'pre-wrap'}}>
                                {t('league.Format')}: {getFormat(item.isLegacy)}
                            </span>
                        </div>
                        <Button buttonText={t('league.View league')}></Button>
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
                                {leagueItemBlock(item)}
                            </Link>
                        </article>
                    ))
                )}
            </section>
        </>
    )
}