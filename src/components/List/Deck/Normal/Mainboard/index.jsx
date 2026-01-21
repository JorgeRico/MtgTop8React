import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import statsTypes from "/src/services/statsTypes.jsx";
import CardTypeList from "/src/components/List/Deck/Normal/CardTypeList";
import DeckCard from "/src/components/List/Deck/Normal/Card";

export default function DeckMainboard(props) {
    const { items }                                   = props;
    const effectRan                                   = useRef(false);
    const [ creatureItems, setCreatureItems ]         = useState([]);
    const [ instantItems, setInstantItems ]           = useState([]);
    const [ sorceryItems, setSorceryItems ]           = useState([]);
    const [ planeswalkerItems, setPlaneswalkerItems ] = useState([]);
    const [ artifactItems, setArtifactItems ]         = useState([]);
    const [ enchantmentItems, setEnchantmentItems ]   = useState([]);
    const [ landItems, setLandItems ]                 = useState([]);

    DeckMainboard.propTypes = {
        items : PropTypes.array
    };

    function getCardTypes(deck, type) {
        let itemsList = [];
        
        for (var i = 0; i < deck.length; i++) {
            if (deck[i].board === statsTypes.MD && deck[i].cardType === type) {                
                itemsList.push(
                    <DeckCard card={deck[i]} key={uuidv4()}></DeckCard>
                )
            }
        }

        return itemsList;
    }

    function setOptions(items) {
        const statsType = [ statsTypes.PLANESWALKER, statsTypes.CREATURE, statsTypes.INSTANT, statsTypes.SORCERY, statsTypes.ARTIFACT, statsTypes.ENCHANTMENT, statsTypes.LAND ]
        const operators = [ setPlaneswalkerItems, setCreatureItems, setInstantItems, setSorceryItems, setArtifactItems, setEnchantmentItems, setLandItems]

        for (var i = 0; i < statsType.length; i++) {
            operators[i](getCardTypes(items, statsType[i]))
        }
    }

    useEffect(() => {
        if (!effectRan.current) {
            if (items.length > 0) {
                setOptions(items)
            }
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, [items.length > 0]);

    return (
        <>
            {items.length > 0 && (
                <>
                    <article className="left maindeck">
                        <CardTypeList items={planeswalkerItems} text='Planeswalkers'></CardTypeList>
                        <CardTypeList items={creatureItems} text='Creatures'></CardTypeList>
                        <CardTypeList items={instantItems} text='Instants'></CardTypeList>
                        <CardTypeList items={sorceryItems} text='Sorceries'></CardTypeList>
                        <CardTypeList items={artifactItems} text='Artifacts'></CardTypeList>
                        <CardTypeList items={enchantmentItems} text='Enchantments'></CardTypeList>
                        <CardTypeList items={landItems} text='Lands'></CardTypeList>
                    </article>
                </>
            )}
        </>
    )
}