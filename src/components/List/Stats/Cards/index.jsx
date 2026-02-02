import { useState } from "react";
import { useApi } from '/src/hooks/useApi.jsx';
import StatsListBlock from "/src/components/List/Stats/Block";
import BluredStatsList from "/src/components/List/Stats/Cards/Fake";
import Block from "/src/components/List/Stats/Cards/Block";
import AdSenseAd from "/src/components/Adsense";


export default function StatsBox(props) {
    const { text, cardType, endpoint, isPlayer } = props;
    const api                                    = useApi();
    const [ loading, setLoading ]                = useState(false);
    const [ renderElements, setRenderElements ]  = useState([]);
    const [ noResults, setNoResults ]            = useState(false);

    // api call
    async function apiCardTypeCall() {
        await api.getAxiosEndpoint(endpoint)
            .then((response) => {
                setTimeout(() => {setLoading(false)}, 1000);
                setTimeout(() => {setRenderElements(response.data.stats)}, 1000);
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
        setLoading(true);
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
                    <div className="left w100 ad-container">
                        <AdSenseAd 
                            adClient="ca-pub-9482818665347681" // Replace with your publisher ID
                            adSlot="8033219754" // Replace with your banner ad slot ID
                            adFormat="auto" // Fixed-size banner
                            fullWidthResponsive={true}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}