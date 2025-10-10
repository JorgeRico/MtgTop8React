import React, { useState } from "react";
import { useApi } from '/src/hooks/use-api.js';
import StatsListBlock from "/src/components/List/Stats/Block";
import BluredStatsList from "/src/components/List/Stats/Cards/Fake";
import Block from "/src/components/List/Stats/Cards/Block"

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
            <section className="listItem left w100 cardsList" >
                <span onClick={() => handleClickCardTypes()}>
                    <Block text={text}></Block>
                </span>
                <div className="left mt10 mb30 overflowHidden cardStats none" id={cardType}>
                    {loading &&
                        <BluredStatsList></BluredStatsList>
                    }
                    {renderElements &&
                        <StatsListBlock items={renderElements} isPlayer={isPlayer} text={text} />
                    } 
                </div>
            </section>
        </>
    )
}