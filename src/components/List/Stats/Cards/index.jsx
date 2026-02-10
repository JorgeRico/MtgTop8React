import { useState } from "react";
import { getAxiosEndpoint } from '/src/hooks/useApi.jsx';
import StatsListBlock from "/src/components/List/Stats/Block";
import BluredStatsList from "/src/components/List/Stats/Cards/Fake";
import Block from "/src/components/List/Stats/Cards/Block";

export default function StatsBox({ text, cardType, endpoint, isPlayer }) {
    const [ renderElements, setRenderElements ] = useState([]);
    const [ noResults, setNoResults ]           = useState(false);

    // api call
    async function apiCardTypeCall() {
        await getAxiosEndpoint(endpoint)
            .then((response) => {
                setRenderElements(response.data.stats);
            })
            .catch((err) => { 
                if (err.status === 404) { 
                    setNoResults(true);
                }
                console.log('error League card stats')
            });
    }

    const handleClickCardTypes = () => {
        hideStats();
        setRenderElements(null);
        showStats();
        apiCardTypeCall()
    }

    function hideStats() {
        const elems = Array.from(document.querySelectorAll('.cardStats'));
        elems.forEach(elem => elem.id !== cardType ? elem.classList.add('none') : null);
    }
    
    function showStats() {
        document.querySelector('#' + cardType).classList.toggle('none');
    }

    return (
        <>
            <section className="listItem flex-item cardsList" >
                <span onClick={() => handleClickCardTypes()}>
                    <Block text={text}></Block>
                </span>
                <div className="left mt10 mb30 overflowHidden cardStats none" id={cardType}>
                    {!renderElements ? (
                        (noResults === true) ? (
                            <>
                                <div class="radius5 cardsList bg-footer padStatsBox">
                                    Sorry, now we don't have tournaments registered for this league
                                </div>
                            </>
                        ) : (
                            <BluredStatsList></BluredStatsList>
                        )
                    ) : (
                        <StatsListBlock items={renderElements} isPlayer={isPlayer} text={text} />
                    )}
                </div>
            </section>
        </>
    )
}