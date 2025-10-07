import React, { useState } from "react";
import { useApi } from '/src/hooks/use-api.js';
import "../module.css";
import StatsList from "/src/components/List/Normal/Stats";
import LoadingCards from "/src/components/List/Fake/StatsList/LoadingCards";
import Block from "/src/components/List/Block/Stats";

export default function StatsBox(props) {
    const { text, cardType, endpoint, isPlayer } = props;
    const api                                    = useApi();
    const [ loading, setLoading ]                = useState(false);
    const [ renderElements, setRenderElements ]  = useState([]);

    // api call
    async function apiCardTypeCall() {
        await api.getAxiosEndpoint(endpoint)
            .then((response) => {
                setTimeout(() => {setLoading(false)}, 1000);
                setTimeout(() => {setRenderElements(response.data.stats)}, 1000);
            })
            .catch((err) => { 
                console.log('error League card stats')
            });
    }

    const handleClickCardTypes = () => {
        hidePlayers();
        setLoading(true);
        setRenderElements(null);
        showPlayer();
        apiCardTypeCall()
    }

    function hidePlayers() {
        const elems = Array.from(document.querySelectorAll('.cardStats'));
        elems.forEach(elem => elem.classList.add('none'));
    }
    
    function showPlayer() {
        document.querySelector('#' + cardType).classList.remove('none');
    }

    return (
        <>
            <div className="listItem left w100 cardsList" >
                <span onClick={() => handleClickCardTypes()}>
                    <Block text={text}  />
                </span>
                <div className="left mt10 mb30 overflowHidden cardStats none" id={cardType}>
                    {loading === true &&
                        <LoadingCards></LoadingCards>
                    }    
                    {renderElements &&
                        <StatsList items={renderElements} isPlayer={isPlayer}/>
                    }
                </div>
            </div>
        </>
    )
}