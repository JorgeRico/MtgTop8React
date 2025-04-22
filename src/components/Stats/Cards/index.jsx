import React from "react";
import HTag from "/src/components/HTag";
import { useApi } from '/src/hooks/use-api.js';
import "./../module.css";

export default function StatsBox(props) {
    const { id, text, cardType, setLoading, setRenderElements, endpoint } = props;
    const api                                                             = useApi();

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
        playersUnselected();
        setLoading(true);
        setRenderElements(null);
        playerSelected();
        apiCardTypeCall()
    }

    function playersUnselected() {
        const elems = Array.from(document.querySelectorAll('.cardsList'));
        elems.forEach(elem => elem.classList.remove('color-selected'));
    }
    
    function playerSelected() {
        document.querySelector('#' + cardType).classList.add('color-selected');
    }

    return (
        <>
            <li className="listItem left line w100 cardsList" id={cardType} onClick={() => handleClickCardTypes()}>
                <div className="left line w100">
                    <div className="circle orangeCircle"></div>
                    <HTag Tag="p" text={text} className="left wAuto pointer" />
                </div>
            </li>
        </>
    )
}