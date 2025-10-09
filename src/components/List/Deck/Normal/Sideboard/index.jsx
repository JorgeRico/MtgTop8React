import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import statsTypes from "/src/services/statsTypes.js";
import CardTypeList from "/src/components/List/Deck/Normal/CardTypeList";
import DeckCard from "/src/components/List/Deck/Normal/Card";

export default function DeckSideboard(props) {
    const { items }                   = props;
    const effectRan                   = useRef(false);
    const [ sideItems, setSideItems ] = useState([]);

    DeckSideboard.propTypes = {
        items : PropTypes.array
    };

    function getSideboard(deck) {
        let itemsList = [];

        for (var i = 0; i < deck.length; i++) {
            if (deck[i].board === statsTypes.SB) {
                itemsList.push(
                    <DeckCard card={deck[i]} key={uuidv4()}></DeckCard>
                )
            }
        }

        return itemsList;
    }

    useEffect(() => {
        if (!effectRan.current) {
            if (items.length > 0) {
                setSideItems(getSideboard(items));
            }
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, [items.length > 0]);

    return (
        <>
            {items.length > 0 && (
                <>
                    <article className="left sideboard">
                        <CardTypeList items={sideItems} text='Sideboard'></CardTypeList>
                    </article>
                </>
            )}
        </>
    )
}