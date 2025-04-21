import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import Deck from "/src/components/List/Deck";
import BluredBigList from "/src/components/Blured/FakeLists/BigList";
import "./module.css";
import { useApi } from '/src/hooks/use-api.js';
import endpoints from "/src/services/endpoints.js"

export default function StatsPlayer(props) {
    const { items }                               = props;
    const effectRan                               = useRef(false);
    const [ renderItems, setRenderItems ]         = useState([]);
    const [ renderDeckItems, setRenderDeckItems ] = useState([]);
    const [ showSpinner, setShowSpinner ]         = useState(false);
    const api                                     = useApi();

    StatsPlayer.propTypes = {
        items : PropTypes.array
    };

    // api call
    async function apiCall(id) {
        await api.getAxiosEndpoint(endpoints.API_DECK_CARDS.replace('{id}', id))
        .then((response) => {
            setTimeout(() => {setShowSpinner(false)}, 1000);
            setTimeout(() => {setRenderDeckItems(response.data)}, 1000);
        })
        .catch((err) => { 
            console.log('error loading deck')
        });
    }

    function handleCards(index, idDeck) {
        setRenderDeckItems(null)
        apiCall(idDeck)
        playersUnselected();
        playerSelected(index);
        setShowSpinner(true);
    }

    function playersUnselected() {
        for (var i = 0; i < items.length; i++) {
            document.querySelector('#player-' + (i+1)).classList.remove('color-selected');
        }
    }
    
    function playerSelected(index) {
        document.querySelector('#player-' + index).classList.add('color-selected');
    }

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item, index) => (
                <li key={uuidv4()} onClick={() => handleCards(index+1, item.idDeck)} id={'player-'+(index+1)} className="listItem pointer deckNameList">
                    <div className="left line w100">
                        <div className="left line ">{item.name}</div>
                    </div>
                    <div className="left line w100 ml15 mt10">
                        <div className="circle blueCircle"></div>
                        <div className="left line">{item.deckName}</div>
                    </div>
                </li>   
            )));
        }
        
        return () => effectRan.current = true;
         // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="left ml5">
                <ol>
                    {(items.length > 0) && (
                        renderItems
                    )}
                </ol>
            </div>
            <div className="left w70 cards">
                {showSpinner === true &&
                    <div className="bluredDeck">
                        <BluredBigList></BluredBigList>
                    </div>
                }
                {renderDeckItems && (
                    <div className="pointer deck">
                        <Deck items={renderDeckItems} />
                    </div>   
                )}
            </div>
        </>
    )
}