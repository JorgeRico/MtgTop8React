import { useState } from "react";
import "../module.css";
import { useApi } from '/src/hooks/useApi.jsx';
import endpoints from "/src/services/endpoints.jsx";
import Deck from "/src/components/List/Deck/Normal";
import BluredDeck from "/src/components/List/Deck/Fake";
import Button from "/src/components/List/Button";

export default function TournamentPlayerItem(props) {
    const { item, index }                         = props;
    const api                                     = useApi();
    const [ loading, setLoading ]                 = useState(false);
    const [ renderDeckItems, setRenderDeckItems ] = useState([]);

    // api call
    async function apiCall(id) {
        setRenderDeckItems([]);
        setLoading(true);

        await api.getAxiosEndpoint(endpoints.API_DECK_CARDS.replace('{id}', id))
        .then((response) => {
            setTimeout(() => { setLoading(false) }, 1000);
            setTimeout(() => { setRenderDeckItems(response.data) }, 1000);
        })
        .catch((err) => { 
            console.log('error loading deck')
        });
    }

    function hideDeckLists(id) {
        const elems = Array.from(document.querySelectorAll('.decklists'));
        elems.forEach(elem => elem.id !== 'deck-'+id ? elem.classList.add('none') : null);
    }

    function handleCards(index, idDeck) {
        const element = document.querySelector('#deck-'+index);
        const button  = document.querySelector('#button-deck-'+index);
        button.setAttribute('disabled', 'true');
        
        hideDeckLists(index);
        element.classList.toggle('none');

        if (!element.classList.contains('none')) {
            apiCall(idDeck);
            setTimeout(() => { button.removeAttribute('disabled') }, 1000);
        } else {
            button.removeAttribute('disabled');
        }
        
    }
    
    return (
        <>
            <section className={`left tournamentPlayer grey-bottom ${(index % 2 == 0) ? 'odd' : 'even'}`} id={'player-'+(index+1)}>
                <div className="items">
                    <div className="left p15 w-20">
                        {index+1}
                    </div>
                    <div className="left p15 w-200 deckName">
                        {item.name}
                    </div>
                    <div className="left p15 w-150 deckName">
                        {item.deckName}
                    </div>
                    <div className="left viewDeck" onClick={() => handleCards((index+1), item.idDeck)}>
                        <Button buttonText="View Deck" id={'button-deck-'+(index+1)}/>
                    </div>
                </div>
            </section>
            <section className="left w100 clear"></section>
            <section className="left w100 none decklists mb20" id={'deck-'+(index+1)}>
                <div className="deck overflowHidden">
                    {loading === true &&
                        <BluredDeck></BluredDeck>
                    }
                    {renderDeckItems && (
                        <Deck items={renderDeckItems} deckName={item.deckName} isBlured={false} />
                    )}
                </div>
            </section>
        </>
    )
}