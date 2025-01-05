import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

// TODO: component needs refactor
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
            if (deck[i].board === 'md' && deck[i].cardType === type) {
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
            if (deck[i].board === 'sb') {
                    itemsList.push(
                        <li key={uuidv4()}>
                            {deck[i].num} {deck[i].name}
                        </li>
                    )
            }
        }

        return itemsList;
    }

    useEffect(() => {
        if (!effectRan.current) {
            if (items.length > 0) {
                setPlaneswalkerItems(getCardTypes(items, 'planeswalker'));
                setCreatureItems(getCardTypes(items, 'creature'));
                setInstantItems(getCardTypes(items, 'instant'));
                setSorceryItems(getCardTypes(items, 'sorcery'));
                setArtifactItems(getCardTypes(items, 'artifact'));
                setEnchantmentItems(getCardTypes(items, 'enchantment'));
                setLandItems(getCardTypes(items, 'land'));
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
                    <div className="left">
                        <ul>
                            {(creatureItems.length > 0) && (
                                <>
                                    <h4>Creatures</h4>
                                    {creatureItems}
                                </>
                            )}
                            {(instantItems.length > 0) && (
                                <>
                                    <h4>Instants</h4>
                                    {instantItems}
                                </>
                            )}
                            {(sorceryItems.length > 0) && (
                                <>
                                    <h4>Sorceries</h4>
                                    {sorceryItems}
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="left">
                        <ul>
                            {(planeswalkerItems.length > 0) && (
                                <>
                                    <h4>Planeswalkers</h4>
                                    {planeswalkerItems}
                                </>
                            )}
                            {(artifactItems.length > 0) && (
                                <>
                                    <h4>Artifacts</h4>
                                    {artifactItems}
                                </>
                            )}
                            {(enchantmentItems.length > 0) && (
                                <>
                                    <h4>Enchantments</h4>
                                    {enchantmentItems}
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="left">
                        <ul>
                            {(landItems.length > 0) && (
                                <>
                                    <h4>Lands</h4>
                                    {landItems}
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="left">
                        <ul>
                            {(sideItems.length > 0) && (
                                <>
                                    <h4>Sideboard</h4>
                                    {sideItems}
                                </>
                            )}
                        </ul>
                    </div>
                </>
            
            )}
        </>
    )
}