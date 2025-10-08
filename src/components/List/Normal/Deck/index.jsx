import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import "./module.css";
import statsTypes from "/src/services/statsTypes.js";
import ModalPopUp from "/src/components/Modal";

export default function Deck(props) {
    const { items, deckName }                         = props;
    const effectRan                                   = useRef(false);
    const [ sideItems, setSideItems ]                 = useState([]);
    const [ creatureItems, setCreatureItems ]         = useState([]);
    const [ instantItems, setInstantItems ]           = useState([]);
    const [ sorceryItems, setSorceryItems ]           = useState([]);
    const [ planeswalkerItems, setPlaneswalkerItems ] = useState([]);
    const [ artifactItems, setArtifactItems ]         = useState([]);
    const [ enchantmentItems, setEnchantmentItems ]   = useState([]);
    const [ landItems, setLandItems ]                 = useState([]);

    const [ totalMaindeck, setTotalMaindeck ]         = useState(0);
    const [ totalSideboard, setTotalSideboard ]       = useState(0);

    Deck.propTypes = {
        items : PropTypes.array
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

    function getCardTypes(deck, type) {
        let itemsList = [];
        
        for (var i = 0; i < deck.length; i++) {
            if (deck[i].board === statsTypes.MD && deck[i].cardType === type) {                
                itemsList.push(
                    <div className="cardItem" key={uuidv4()}>
                        {deck[i].num} {deck[i].name}
                        <span className="modalImg">
                            <ModalPopUp img={deck[i].imgUrl} name={deck[i].name} modalType={`deck-${deck[i].id}`} />
                        </span>
                    </div>
                )
            }
        }

        return itemsList;
    }

    function getSideboard(deck) {
        let itemsList = [];

        for (var i = 0; i < deck.length; i++) {
            if (deck[i].board === statsTypes.SB) {
                setTotalSideboard(totalSideboard+parseInt(deck[i].num))
                itemsList.push(
                    <div className="cardItem" key={uuidv4()}>
                        {deck[i].num} {deck[i].name}
                        <span className="modalImg">
                            <ModalPopUp img={deck[i].imgUrl} name={deck[i].name} modalType={`deck-${deck[i].id}`} />
                        </span>
                    </div>
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
                countTotalItems(items);
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
                        <div className="deckItems mb10">
                            <h4>{text}</h4>
                            {items}
                        </div>
                    </>
                )}
            </>
        )
    }

    return (
        <>
            {items.length > 0 && (
                <>
                    <div className="left w100 f24 ml12 mt20">
                        <div className="left w100">{deckName}</div>
                        <div className="left w100 f14 mt10">Maindeck total cards: {totalMaindeck}</div>
                        <div className="left w100 f14 mt5 mb10">Sideboard total cards: {totalSideboard}</div>
                    </div>
                    <div className="left maindeck">
                        {showItems(planeswalkerItems, 'Planeswalkers')}
                        {showItems(creatureItems, 'Creatures')}
                        {showItems(instantItems, 'Instants')}
                        {showItems(sorceryItems, 'Sorceries')}
                        {showItems(artifactItems, 'Artifacts')}
                        {showItems(enchantmentItems, 'Enchantments')}
                        {showItems(landItems, 'Lands')}
                    </div>
                    <div className="left sideboard">
                        {showItems(sideItems, 'Sideboard')}
                    </div>
                </>
            )}
        </>
    )
}