import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import statsTypes from "/src/services/statsTypes.jsx";
import CardTypeList from "/src/components/List/Deck/Normal/CardTypeList";
import DeckCard from "/src/components/List/Deck/Normal/Card";
import { useTranslation } from 'react-i18next';

export default function DeckMainboard({ items }) {
    const [ creatureItems, setCreatureItems ]         = useState([]);
    const [ instantItems, setInstantItems ]           = useState([]);
    const [ sorceryItems, setSorceryItems ]           = useState([]);
    const [ planeswalkerItems, setPlaneswalkerItems ] = useState([]);
    const [ artifactItems, setArtifactItems ]         = useState([]);
    const [ enchantmentItems, setEnchantmentItems ]   = useState([]);
    const [ landItems, setLandItems ]                 = useState([]);
    const { t }                                       = useTranslation();

    function getCardTypes(deck, type) {
        let itemsList = [];
        
        for (var i = 0; i < deck.length; i++) {
            if (deck[i].board === t(statsTypes.MD) && deck[i].cardType === type) {                
                itemsList.push(
                    <DeckCard card={deck[i]} key={uuidv4()}></DeckCard>
                )
            }
        }

        return itemsList;
    }

    function setOptions(items) {
        const statsType = [ t(statsTypes.PLANESWALKER), t(statsTypes.CREATURE), t(statsTypes.INSTANT), t(statsTypes.SORCERY), t(statsTypes.ARTIFACT), t(statsTypes.ENCHANTMENT), t(statsTypes.LAND) ]
        const operators = [ setPlaneswalkerItems, setCreatureItems, setInstantItems, setSorceryItems, setArtifactItems, setEnchantmentItems, setLandItems]

        for (var i = 0; i < statsType.length; i++) {
            operators[i](getCardTypes(items, statsType[i]))
        }
    }

    useEffect(() => {
        if (items.length > 0) {
            setOptions(items)
        }
    }, [items.length > 0]);

    return (
        <>
            {items.length > 0 && (
                <>
                    <article className="left maindeck">
                        <CardTypeList items={planeswalkerItems} text={t('deck.Planeswalkers')}></CardTypeList>
                        <CardTypeList items={creatureItems} text={t('deck.Creatures')}></CardTypeList>
                        <CardTypeList items={instantItems} text={t('deck.Instants')}></CardTypeList>
                        <CardTypeList items={sorceryItems} text={t('deck.Sorceries')}></CardTypeList>
                        <CardTypeList items={artifactItems} text={t('deck.Artifacts')}></CardTypeList>
                        <CardTypeList items={enchantmentItems} text={t('deck.Enchantments')}></CardTypeList>
                        <CardTypeList items={landItems} text={t('deck.Lands')}></CardTypeList>
                    </article>
                </>
            )}
        </>
    )
}