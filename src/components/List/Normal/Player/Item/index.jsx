import React, { useState } from "react";
import "../module.css";
import { useApi } from '/src/hooks/use-api.js';
import endpoints from "/src/services/endpoints.js";
import PropTypes from "prop-types";
import Deck from "/src/components/List/Normal/Deck";
import BluredDeck from "/src/components/List/Fake/DeckList";
import Button from "/src/components/List/Button";

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

        // console.log('close ddjdjdj')
        
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
    
    return (
        <>
            <section className={`left w100 tournamentPlayer grey-bottom ${(index % 2 == 0) ? 'odd' : 'even'}`} id={'player-'+(index+1)}>
                <div className="left p15 w-20">
                    {index+1}
                </div>
                <div className="left p15 w-200">
                    {item.name}
                </div>
                <div className="left p15 w-150 deckName">
                    {item.deckName}
                </div>
                <div className="left viewDeck" onClick={() => handleCards((index+1), item.idDeck)}>
                    <Button buttonText="View Deck" />
                </div>
            </section>
            <div className="left w100 none decklists mb20" id={'deck-'+(index+1)}>
                <div className="deck overflowHidden">
                    {loading === true &&
                        <BluredDeck></BluredDeck>
                    }
                    {renderDeckItems && (
                        <Deck items={renderDeckItems} deckName={item.deckName} />
                    )}
                </div>
            </div>
        </>
    )
}