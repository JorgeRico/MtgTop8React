import React from "react";
import Deck from "/src/components/List/Deck/Normal";
import decklist from "/src/fakeData/decklist.jsx";

export default function BluredDeck() {
    return (
        <>
            <Deck items={decklist.deckItems} deckName={decklist.deckName} isBlured={true} />
        </>
    )
}