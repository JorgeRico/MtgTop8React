import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import Deck from "/src/components/List/Deck";
import Spinner from "/src/components/Spinner";
import Settings from "/src/assets/images/settings.png";
import "./module.css";

export default function StatsPlayer(props) {
    const { items }                               = props;
    const effectRan                               = useRef(false);
    const [ renderItems, setRenderItems ]         = useState([]);
    const [ renderDeckItems, setRenderDeckItems ] = useState([]);
    const [ showSpinner, setShowSpinner ]         = useState(false);

    StatsPlayer.propTypes = {
        items : PropTypes.array
    };

    function handleCards(index) {
        playersUnselected();
        playerSelected(index);
        hideCards();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {displayBlockComponent(index)}, 3000);
    }

    function playersUnselected() {
        for (var i = 0; i < items.length; i++) {
            document.querySelector('#player-' + (i+1)).classList.remove('color-selected');
            document.querySelector('#player-' + (i+1) + ' img').classList.add('invertColor');
        }
    }
    function playerSelected(index) {
        document.querySelector('#player-' + index).classList.add('color-selected');
        document.querySelector('#player-' + index + ' img').classList.remove('invertColor');
    }

    function displayBlockComponent(index) {
        document.querySelector('#cards-'+index).style.display = 'block';
    }

    function displayNoneComponent(index) {
        document.querySelector('#cards-'+index).style.display = 'none';
    }

    function hideCards() {
        for (var i = 1; i <= items.length; i++) {
            displayNoneComponent(i);
        }
    }

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item, index) => (
                <li key={uuidv4()} onClick={() => handleCards(index+1)} id={'player-'+(index+1)} className="pointer">
                    <div className="left line">
                        {item.name}
                    </div>
                    <div className="right">
                        <img src={Settings} alt="" className="invertColor settings absolute"/>
                    </div>
                </li>   
            )));

            setRenderDeckItems(items?.map((item, index) => (
                <div key={uuidv4()} className="pointer deck" id={`cards-${index+1}`} style={{display: 'none'}}>
                    <Deck items={item.deck} />
                </div>   
            )));
        }
        
        return () => effectRan.current = true;
         // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="left w25">
                <ol className="ml25">
                    {(items.length > 0) && (
                        renderItems
                    )}
                </ol>
            </div>
            <div className="right w75 cards">
                {showSpinner === true &&
                    <div className="statsSpinner">
                        <Spinner></Spinner>
                    </div>
                }
                {(items.length > 0) && (
                    renderDeckItems
                )}
            </div>
        </>
    )
}