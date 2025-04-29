import React from "react";
import Deck from "/src/components/List/Normal/Deck";
import decklist from "/src/fakeData/decklist.js";

export default function BluredDeck() {
    return (
        <>
            <div className="blink blured">
                <Deck items={decklist.deckItems} deckName={decklist.deckName} />
            </div>
        </>
    )
}