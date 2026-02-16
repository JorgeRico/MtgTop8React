import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import statsTypes from "/src/services/stats-types.jsx";
import CardTypeList from "/src/components/List/Deck/Normal/CardTypeList";
import DeckCard from "/src/components/List/Deck/Normal/Card";
import { useTranslation } from 'react-i18next';

export default function DeckSideboard({ items }) {
    const [ sideItems, setSideItems ] = useState([]);
    const { t }                       = useTranslation();

    function getSideboard(deck) {
        let itemsList = [];

        for (var i = 0; i < deck.length; i++) {
            if (deck[i].board === t(statsTypes.SB)) {
                itemsList.push(
                    <DeckCard card={deck[i]} key={uuidv4()}></DeckCard>
                )
            }
        }

        return itemsList;
    }

    useEffect(() => {
        if (items.length > 0) {
            setSideItems(getSideboard(items));
        }
    }, [items.length > 0]);

    return (
        <>
            {items.length > 0 && (
                <>
                    <article className="left sideboard">
                        <CardTypeList items={sideItems} text={t('deck.Sideboard')}></CardTypeList>
                    </article>
                </>
            )}
        </>
    )
}