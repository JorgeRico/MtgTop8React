import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cupIcon from '/src/assets/images/cup.png';
import Button from "/src/components/List/Button";
import { useApi } from '/src/hooks/use-api.jsx';

export default function LeagueList(props) {
    const { url, items, isBlured }        = props;
    const effectRan                       = useRef(false);
    const [ renderItems, setRenderItems ] = useState(null);
    const api                             = useApi();

    LeagueList.propTypes = {
        url      : PropTypes.string,
        items    : PropTypes.array,
        isBlured : PropTypes.bool
    };

    const leagueItemBlock = (icon, text1, text2, buttonText) => { 
        return (
            <>
                <div className="left w100 mb10 bg-footer radius5">
                    <div className="wAuto padBox overflowHidden">
                        <div className="cupBox border-grey left radius5 bg-blue p5 w-25">
                            <img src={icon} width="15" height="14" alt="Cup Champion" className="cupIcon w-15" />
                        </div>
                        <div className="left format wAuto ml25 tournamentDescription">
                            <strong>{text1}</strong>
                            <br></br>
                            <span className="left f12 mt5" style={{whiteSpace: 'pre-wrap'}}>
                                {text2}
                            </span>
                        </div>
                        <Button buttonText={buttonText}></Button>
                    </div>
                </div>
            </>
        )
    }

    useEffect(() => {
        if (!effectRan.current) {
            if (items?.length > 0) {
                setRenderItems(items?.map((item) => (
                    <article className="listItem pointer title mb15 overflowHidden" key={uuidv4()}>
                        <Link to={url + item.id}>
                            {leagueItemBlock(cupIcon, item.name, `Format: ${api.getFormat(item.isLegacy)}`, "View league")}
                        </Link>
                    </article>
                )));
            }
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <section className={`left w100 overflowHidden ${isBlured ? 'blink blured' : ''}`}>
                {(items?.length > 0) && (
                    renderItems
                )}
            </section>
        </>
    )
}