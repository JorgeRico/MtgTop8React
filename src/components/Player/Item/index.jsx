import React from "react";
import "./../module.css";
import { useApi } from '/src/hooks/use-api.js';
import endpoints from "/src/services/endpoints.js";
import PropTypes from "prop-types";

export default function StatsPlayerItem(props) {
    const { item, index, setLoading, setRenderDeckItems } = props;
    const api                                             = useApi();

    StatsPlayerItem.propTypes = {
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

    function handleCards(index, idDeck) {
        setRenderDeckItems(null)
        playersUnselected();
        playerSelected(index);
        setLoading(true);
        apiCall(idDeck)
    }

    function playersUnselected() {
        const elems = Array.from(document.querySelectorAll('.deckNameList'));
        elems.forEach(elem => elem.classList.remove('color-selected'));
    }
    
    function playerSelected(index) {
        document.querySelector('#player-' + index).classList.add('color-selected');
    }

    
    return (
        <>
            <li key={'player-'+(index+1)} onClick={() => handleCards(index+1, item.idDeck)} id={'player-'+(index+1)} className="listItem pointer deckNameList">
                <div className="left line w100">
                    <div className="left line ">{item.name}</div>
                </div>
                <div className="left line w100 ml15 mt10">
                    <div className="circle blueCircle"></div>
                    <div className="left line">{item.deckName}</div>
                </div>
            </li>   
        </>
    )
}