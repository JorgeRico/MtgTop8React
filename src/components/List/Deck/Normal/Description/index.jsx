import React, { useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import statsTypes from "/src/services/statsTypes.js";

export default function DeckDescription(props) {
    const { items, deckName }                   = props;
    const effectRan                             = useRef(false);
    const [ totalMaindeck, setTotalMaindeck ]   = useState(0);
    const [ totalSideboard, setTotalSideboard ] = useState(0);

    DeckDescription.propTypes = {
        items    : PropTypes.array,
        deckName : PropTypes.string
    };

    function countTotalItems(deck) {
        let totalMaindeck  = 0;
        let totalSideboard = 0;

        for (var i = 0; i < deck.length; i++) {
            if (deck[i].board === statsTypes.MD) {
                totalMaindeck = totalMaindeck + parseInt(deck[i].num);
            }
            if (deck[i].board === statsTypes.SB) {
                totalSideboard = totalSideboard + parseInt(deck[i].num);
            }
        }

        setTotalMaindeck(totalMaindeck);
        setTotalSideboard(totalSideboard);
    }

    useEffect(() => {
        if (!effectRan.current) {
            if (items.length > 0) {
                countTotalItems(items);
            }
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, [items.length > 0]);

    return (
        <>
            {items.length > 0 && (
                <>
                    <article className="left w100 f24 ml12 mt20">
                        <div className="left w100">{deckName}</div>
                        <div className="left w100 f14 mt10">Maindeck total cards: {totalMaindeck}</div>
                        <div className="left w100 f14 mt5 mb10">Sideboard total cards: {totalSideboard}</div>
                    </article>
                </>
            )}
        </>
    )
}