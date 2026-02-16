import { useState, useEffect } from "react";
import statsTypes from "/src/services/statsTypes.jsx";
import { useTranslation } from 'react-i18next';

export default function DeckDescription({ items, deckName }) {
    const [ totalMaindeck, setTotalMaindeck ]   = useState(0);
    const [ totalSideboard, setTotalSideboard ] = useState(0);
    const { t }                                 = useTranslation();
    
    function countTotalItems(deck) {
        let totalMaindeck  = 0;
        let totalSideboard = 0;

        for (var i = 0; i < deck.length; i++) {
            if (deck[i].board === t(statsTypes.MD)) {
                totalMaindeck = totalMaindeck + parseInt(deck[i].num);
            }
            if (deck[i].board === t(statsTypes.SB)) {
                totalSideboard = totalSideboard + parseInt(deck[i].num);
            }
        }

        setTotalMaindeck(totalMaindeck);
        setTotalSideboard(totalSideboard);
    }

    useEffect(() => {
        if (items.length > 0) {
            countTotalItems(items);
        }
    }, [items.length > 0]);

    return (
        <>
            {items.length > 0 && (
                <>
                    <article className="left w100 f24 ml12">
                        <div className="left w100">{deckName}</div>
                        <div className="left w100 f14 mt10">{t('deck.Maindeck total cards')}: {totalMaindeck}</div>
                        <div className="left w100 f14 mt5 mb10">{t('deck.Sideboard total cards')}: {totalSideboard}</div>
                    </article>
                </>
            )}
        </>
    )
}