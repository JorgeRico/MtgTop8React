import React, { useRef, useState, useEffect } from "react";
import HTag from "/src/components/HTag";
import ListNoLink from "/src/components/List/NoLink";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import { useParams } from 'react-router-dom';
import Spinner from "/src/components/Spinner";
import Settings from "/src/assets/images/settings.png";

export default function StatsBox() {
    const { id }                                      = useParams();
    const api                                         = useApi();
    const effectRan                                   = useRef(false);
    const [ top10, setTop10 ]                         = useState(null);
    const [ mainboard, setMainboard ]                 = useState();
    const [ sideboard, setSideboard ]                 = useState(); 
    const [ players, setPlayers ]                     = useState();
    const [ showTop10, setShowTop10 ]                 = useState(false);
    const [ showPlayers, setShowPlayers ]             = useState(false);
    const [ showMainboard, setShowMainboard ]         = useState(false);
    const [ showSideboard, setShowSideboard ]         = useState(false);
    const [ showSpinner, setShowSpinner ]             = useState(false);
    const [ instants, setInstants ]                   = useState();
    const [ creatures, setCreatures ]                 = useState();
    const [ sorceries, setSorceries ]                 = useState();
    const [ artifacts, setArtifacts ]                 = useState();
    const [ enchantments, setEnchantments ]           = useState();
    const [ planeswalkers, setPlaneswalkers ]         = useState();
    const [ lands, setLands ]                         = useState();
    const [ showCreatures, setShowCreatures ]         = useState(false);
    const [ showInstants, setShowInstants ]           = useState(false);
    const [ showSorceries, setShowSorceries ]         = useState(false);
    const [ showArtifacts, setShowArtifacts ]         = useState(false);
    const [ showEnchantments, setShowEnchantments ]   = useState(false);
    const [ showPlaneswalkers, setShowPlaneswalkers ] = useState(false);
    const [ showLands, setShowLands ]                 = useState(false);

    // api call
    async function apiCall(id) {
        await api.getAxiosEndpoint(endpoints.API_LEAGUES + '/' + id + '/stats')
        .then((response) => {
            setTop10(response.data.top10);
            setMainboard(response.data.mb);
            setSideboard(response.data.sb);
            setPlayers(response.data.players);
        })
        .catch((err) => { 
            console.log('error')
        });
    }

    // api call
    async function apiCardsCall(id) {
        await api.getAxiosEndpoint(endpoints.API_LEAGUES + '/' + id + '/cards/stats')
        .then((response) => {
            setInstants(response.data.instants);
            setCreatures(response.data.creatures);
            setSorceries(response.data.sorceries);
            setArtifacts(response.data.artifacts);
            setEnchantments(response.data.enchantments);
            setPlaneswalkers(response.data.planeswalkers);
            setLands(response.data.lands);
        })
        .catch((err) => { 
            console.log('error')
        });
    }

     useEffect(() => {
        if (!effectRan.current) {
            apiCall(id);
            apiCardsCall(id);
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useParams.id != null]);

    function hideStats() {
        setShowPlayers(false);
        setShowTop10(false);
        setShowMainboard(false);
        setShowSideboard(false);
        setShowCreatures(false);
        setShowInstants(false);
        setShowSorceries(false);
        setShowArtifacts(false);
        setShowEnchantments(false);
        setShowPlaneswalkers(false);
        setShowLands(false);
    }

    function handleClickPlayers() {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowPlayers(true)}, 3000);
    }

    const handleClickCards = () => {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowTop10(true)}, 3000);
    }

    const handleClickMainboard = () => {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowMainboard(true)}, 3000);
    }

    const handleClickSideboard = () => {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowSideboard(true)}, 3000);
    }

    const handleClickCreatures = () => {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowCreatures(true)}, 3000);
    }

    const handleClickInstants = () => {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowInstants(true)}, 3000);
    }

    const handleClickSorceries = () => {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowSorceries(true)}, 3000);
    }

    const handleClickArtifacts = () => {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowArtifacts(true)}, 3000);
    }

    const handleClickEnchantments = () => {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowEnchantments(true)}, 3000);
    }

    const handleClickPlaneswalkers = () => {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowPlaneswalkers(true)}, 3000);
    }

    const handleClickLands = () => {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 3000);
        setTimeout(() => {setShowLands(true)}, 3000);
    }

    const optionStats = (topText) => {
        return (
            <>
                <div className="left line">
                    <HTag Tag="p" text={topText} className="left wAuto pointer" />
                </div>
                <div className="right">
                    <img src={Settings} alt="" className="invertColor settings absolute"/>
                </div>
            </>
        )
    }
    
    const cardStats = () => {
        return (
            <>
                <ul>
                    <li className="left line" onClick={handleClickPlayers}>
                        {optionStats("Top Players")}
                    </li>
                    <li className="left line" onClick={handleClickCards}>
                        {optionStats("Top Cards")}
                    </li>
                    <li className="left line" onClick={handleClickMainboard}>
                        {optionStats("Top Mainboard Cards")}
                    </li>
                    <li className="left line" onClick={handleClickSideboard}>
                        {optionStats("Top Sideboard Cards")}
                    </li>
                    <li className="left line" onClick={handleClickCreatures}>
                        {optionStats("Top Creatures")}
                    </li>
                    <li className="left line" onClick={handleClickInstants}>
                        {optionStats("Top Instants")}
                    </li>
                    <li className="left line" onClick={handleClickSorceries}>
                        {optionStats("Top Sorceries")}
                    </li>
                    <li className="left line" onClick={handleClickArtifacts}>
                        {optionStats("Top Artifacts")}
                    </li>
                    <li className="left line" onClick={handleClickEnchantments}>
                        {optionStats("Top Enchantments")}
                    </li>
                    <li className="left line" onClick={handleClickPlaneswalkers}>
                        {optionStats("Top Planeswalkers")}
                    </li>
                    <li className="left line" onClick={handleClickLands}>
                        {optionStats("Top Lands")}
                    </li>
                </ul>
            </>
        )
    }

    const showStats = () => {
        return (
            <>
                {(players != null && showPlayers === true) &&
                    <ListNoLink items={players} />
                }
                {(top10 != null && showTop10 === true) &&
                    <ListNoLink items={top10} />
                }
                {(mainboard != null && showMainboard === true) &&
                    <ListNoLink items={mainboard} />
                }
                {(sideboard != null && showSideboard === true) &&
                    <ListNoLink items={sideboard} />
                }
                {(creatures != null && showCreatures === true) &&
                    <ListNoLink items={creatures} />
                }
                {(instants != null && showInstants === true) &&
                    <ListNoLink items={instants} />
                }
                {(sorceries != null && showSorceries === true) &&
                    <ListNoLink items={sorceries} />
                }
                {(artifacts != null && showArtifacts === true) &&
                    <ListNoLink items={artifacts} />
                }
                {(enchantments != null && showEnchantments === true) &&
                    <ListNoLink items={enchantments} />
                }
                {(planeswalkers != null && showPlaneswalkers === true) &&
                    <ListNoLink items={planeswalkers} />
                }
                {(lands != null && showLands === true) &&
                    <ListNoLink items={lands} />
                }
            </>
        )
    }

    return (
        <>
            <div className='left wAuto'>
                <div className="left wAuto mb20 statsBox">
                    {cardStats()}
                </div>
                <div className="right wAuto ml15 showStatsCards">
                    {showSpinner === true &&
                        <div className="statsSpinner">
                            <Spinner></Spinner>
                        </div>
                    }
                    <div className="wAuto cards">
                        {showStats()}
                    </div>
                </div>
            </div>
        </>
    );
}