import React, { useState } from "react";
import "../module.css";
import { useApi } from '/src/hooks/use-api.js';
import endpoints from "/src/services/endpoints.js";
import PropTypes from "prop-types";
import Deck from "/src/components/List/Deck";
import BluredDeck from "/src/components/Blured/FakeLists/DeckList";

export default function TournamentPlayerItem(props) {
    const { item, index }                         = props;
    const api                                     = useApi();
    const [ loading, setLoading ]                 = useState(false);
    const [ renderDeckItems, setRenderDeckItems ] = useState([]);
    const [ hideElement, setHideElement ]         = useState(true);

    TournamentPlayerItem.propTypes = {
        items : PropTypes.array
    };

    // api call
    async function apiCall(id) {
        await api.getAxiosEndpoint(endpoints.API_DECK_CARDS.replace('{id}', id))
        .then((response) => {
            setTimeout(() => {setLoading(false)}, 1000);
            setTimeout(() => {setRenderDeckItems(response.data)}, 1000);
        })
        .catch((err) => { 
            console.log('error loading deck')
        });
    }

    function hideDeckLists() {
        const elems = Array.from(document.querySelectorAll('.decklists'));
        elems.forEach(elem => elem.classList.remove('block'));
        elems.forEach(elem => elem.classList.add('none'));
        setHideElement(true);
    }

    function handleCards(index, idDeck) {
        const elem = document.querySelector('#deck-'+index);
        
        hideDeckLists();
        if ( hideElement === true ) {
            elem.classList.remove('none');
            elem.classList.add('block');
            setHideElement(!hideElement);
        } else {
            elem.classList.remove('block');
            elem.classList.add('none');
        }

        setRenderDeckItems(null);
        setLoading(true);
        apiCall(idDeck)
    }

    function indexConversionToText(num) {
        if (num == 1) {
            // add blank spaces
            return "1st\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
        }
        if (num == 2) {
            // add blank spaces
            return "2nd\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
        }
        if (num == 3 || num == 4) {
            return "3rd-4th";
        }
        if (num >= 5 && num <= 8) {
            return "5th-8th";
        }
        if (num >= 9 || num <= 16) {
            return "9th-16th";
        }
    }
    
    return (
        <>
            <div className="left w100 tournamentPlayer" id={'player-'+(index+1)}>
                <div className="left alignLeft index">
                    {indexConversionToText(index+1)}
                </div>
                <div className="left alignLeft w30">
                    {item.name}
                </div>
                <div className="left alignLeft w30">
                    {item.deckName}
                </div>
                <div className="left center w20 pointer color-selected f14 viewDeck" onClick={() => handleCards((index+1), item.idDeck)}>
                    view deck
                </div>
            </div>
            <div className="left w100 none decklists" id={'deck-'+(index+1)}>
                <div className="deck overflowHidden">
                    {loading === true &&
                        <div className="bluredDeck">
                            <BluredDeck></BluredDeck>
                        </div>
                    }
                    {renderDeckItems && (
                        <Deck items={renderDeckItems} deckName={item.deckName} />
                    )}
                </div>
            </div>
        </>
    )
}