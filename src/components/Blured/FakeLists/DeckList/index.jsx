import React from "react";
import "/src/components/List/Deck/module.css"

export default function BluredDeck() {
    return (
        <>
            <div className="left w100 f24 ml12 mt20 blured">
                <div className="left w100">Fake Text</div>
                <div className="left w100 f14 mt10">Maindeck total cards: XXX</div>
                <div className="left w100 f14 mt5">Sideboard total cards: XXX</div>
            </div>
            <div className="left maindeck w70 blured">
                <div className="deckItems">
                    <h4>Fake Text</h4>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                </div>
                <div className="deckItems blured">
                    <h4>Fake Text</h4>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                </div>
                <div className="deckItems blured">
                    <h4>Fake Text</h4>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                </div>
                <div className="deckItems blured">
                    <h4>Fake Text</h4>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                </div>
            </div>
            <div className="right sideboard w30 blured">
                <div className="deckItems">
                    <h4>Fake Text</h4>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                    <div className="cardItem">
                        4 Fake card item
                    </div>
                </div>
            </div>
        </>
    )
}