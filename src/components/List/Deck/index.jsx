import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import "./module.css";
import statsTypes from "/src/services/statsTypes.js"

export default function Deck(props) {
    const { items }                                   = props;
    const effectRan                                   = useRef(false);
    const [ sideItems, setSideItems ]                 = useState([]);
    const [ creatureItems, setCreatureItems ]         = useState([]);
    const [ instantItems, setInstantItems ]           = useState([]);
    const [ sorceryItems, setSorceryItems ]           = useState([]);
    const [ planeswalkerItems, setPlaneswalkerItems ] = useState([]);
    const [ artifactItems, setArtifactItems ]         = useState([]);
    const [ enchantmentItems, setEnchantmentItems ]   = useState([]);
    const [ landItems, setLandItems ]                 = useState([]);

    Deck.propTypes = {
        items : PropTypes.array
    };

    function getCardTypes(deck, type) {
        let itemsList = [];

        for (var i = 0; i < deck.length; i++) {
            if (deck[i].board === statsTypes.MD && deck[i].cardType === type) {
                itemsList.push(
                    <li key={uuidv4()}>
                        {deck[i].num} {deck[i].name}
                    </li>
                )
            }
        }

        return itemsList;
    }

    function getSideboard(deck) {
        let itemsList = [];

        for (var i = 0; i < deck.length; i++) {
            if (deck[i].board === statsTypes.SB) {
                itemsList.push(
                    <li key={uuidv4()}>
                        {deck[i].num} {deck[i].name}
                    </li>
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
                setSideItems(getSideboard(items));
            }
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, [items.length > 0]);

    const showItems = (items, text) => {
        return (
            <>
                {(items.length > 0) && (
                    <>
                        <h4>{text}</h4>
                        {items}
                    </>
                )}
            </>
        )
    }

    return (
        <>
            {items.length > 0 && (
                <>
                    <div class="maindeck f16">
                        <div>
                            <ul>
                                {showItems(planeswalkerItems, 'Planeswalkers')}
                                {showItems(creatureItems, 'Creatures')}
                                {showItems(instantItems, 'Instants')}
                                {showItems(sorceryItems, 'Sorceries')}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {showItems(artifactItems, 'Artifacts')}
                                {showItems(enchantmentItems, 'Enchantments')}
                                {showItems(landItems, 'Lands')}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {showItems(sideItems, 'Sideboard')}
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}