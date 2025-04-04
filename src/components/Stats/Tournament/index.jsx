import React, { useRef, useState, useEffect } from "react";
import HTag from "/src/components/HTag";
import ListNoLink from "/src/components/List/NoLink";
import endpoints from "/src/services/endpoints.js"
import { useApi } from '/src/hooks/use-api.js';
import { useParams } from 'react-router-dom';
import More from "/src/assets/images/more.png";
import BluredStatsList from "/src/components/Blured/FakeLists/StatsList";
import "./../module.css";

export default function StatsBox() {
    const { id }                                      = useParams();
    const api                                         = useApi();
    const effectRan                                   = useRef(false);
    const [ top10, setTop10 ]                         = useState(null);
    const [ mainboard, setMainboard ]                 = useState();
    const [ sideboard, setSideboard ]                 = useState(); 
    const [ showTop10, setShowTop10 ]                 = useState(false);
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
        await api.getAxiosEndpoint(endpoints.API_TOURNAMENTS + '/' + id + '/stats')
        .then((response) => {
            setTop10(response.data.top10);
            setMainboard(response.data.mb);
            setSideboard(response.data.sb);
        })
        .catch((err) => { 
            console.log('error tournament stats')
        });
    }

    // api call
    async function apiCardsCall(id) {
        await api.getAxiosEndpoint(endpoints.API_TOURNAMENTS + '/' + id + '/cards/stats')
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
            console.log('error tournament card stats')
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

    function changeItems(value, operator) {
        hideStats();
        setShowSpinner(true);
        setTimeout(() => {setShowSpinner(false)}, 1500);
        setTimeout(() => {operator(!value)}, 1500);
    }

    const handleClickCards = () => {
        changeItems(showTop10, setShowTop10);
    }

    const handleClickMainboard = () => {
        changeItems(showMainboard, setShowMainboard);
    }

    const handleClickSideboard = () => {
        changeItems(showSideboard, setShowSideboard);
    }

    const handleClickCreatures = () => {
        changeItems(showCreatures, setShowCreatures);
    }

    const handleClickInstants = () => {
        changeItems(showInstants, setShowInstants);
    }

    const handleClickSorceries = () => {
        changeItems(showSorceries, setShowSorceries);
    }

    const handleClickArtifacts = () => {
        changeItems(showArtifacts, setShowArtifacts);
    }

    const handleClickEnchantments = () => {
        changeItems(showEnchantments, setShowEnchantments);
    }

    const handleClickPlaneswalkers = () => {
        changeItems(showPlaneswalkers, setShowPlaneswalkers);
    }

    const handleClickLands = () => {
        changeItems(showLands, setShowLands);
    }

    const optionStats = (option, topText) => {
        return (
            <>
                <div className="left line">
                    <HTag Tag="p" text={topText} className={option === true ? "color-selected left wAuto pointer" : "left wAuto pointer"} />
                </div>
                <div className="right">
                    <img src={More} alt="" className={option === true ? "color-selected settings absolute" : "invertColor settings absolute"} />
                </div>
            </>
        )
    }

    const cardStats = () => {
        return (
            <>
                <ul>
                    <li className={showTop10 === true ? "color-selected left line" : "left line"} onClick={handleClickCards}>
                        {optionStats(showTop10, "Top Cards")}
                    </li>
                    <li className={showMainboard === true ? "color-selected left line" : "left line"} onClick={handleClickMainboard}>
                        {optionStats(showMainboard, "Top Mainboard Cards")}
                    </li>
                    <li className={showSideboard === true ? "color-selected left line" : "left line"} onClick={handleClickSideboard}>
                        {optionStats(showSideboard, "Top Sideboard Cards")}
                    </li>
                    <li className={showCreatures === true ? "color-selected left line" : "left line"} onClick={handleClickCreatures}>
                        {optionStats(showCreatures, "Top Creatures")}
                    </li>
                    <li className={showInstants === true ? "color-selected left line" : "left line"} onClick={handleClickInstants}>
                        {optionStats(showInstants, "Top Instants")}
                    </li>
                    <li className={showSorceries === true ? "color-selected left line" : "left line"} onClick={handleClickSorceries}>
                        {optionStats(showSorceries, "Top Sorceries")}
                    </li>
                    <li className={showArtifacts === true ? "color-selected left line" : "left line"} onClick={handleClickArtifacts}>
                        {optionStats(showArtifacts, "Top Artifacts")}
                    </li>
                    <li className={showEnchantments === true ? "color-selected left line" : "left line"} onClick={handleClickEnchantments}>
                        {optionStats(showEnchantments, "Top Enchantments")}
                    </li>
                    <li className={showPlaneswalkers === true ? "color-selected left line" : "left line"} onClick={handleClickPlaneswalkers}>
                        {optionStats(showPlaneswalkers, "Top Planeswalkers")}
                    </li>
                    <li className={showLands === true ? "color-selected left line" : "left line"} onClick={handleClickLands}>
                        {optionStats(showLands, "Top Lands")}
                    </li>
                </ul>
            </>
        )
    }

    const showStats = () => {
        return (
            <>
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
                    <div className="wAuto cards">
                        {showSpinner === true ? (
                                <BluredStatsList></BluredStatsList>
                            ) : (
                                showStats()
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}