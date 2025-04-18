import React, { useState } from "react";
import HTag from "/src/components/HTag";
import ListNoLink from "/src/components/List/NoLink";
import endpoints from "/src/services/endpoints.js"
import statsTypes from "/src/services/statsTypes.js"
import { useApi } from '/src/hooks/use-api.js';
import { useParams } from 'react-router-dom';
import More from "/src/assets/images/more.png";
import BluredStatsList from "/src/components/Blured/FakeLists/StatsList";
import "./../module.css";

export default function StatsBox() {
    const { id }                                      = useParams();
    const api                                         = useApi();
    const [ showTop10, setShowTop10 ]                 = useState(false);
    const [ showMainboard, setShowMainboard ]         = useState(false);
    const [ showSideboard, setShowSideboard ]         = useState(false);
    const [ showSpinner, setShowSpinner ]             = useState(false);
    const [ showCreatures, setShowCreatures ]         = useState(false);
    const [ showInstants, setShowInstants ]           = useState(false);
    const [ showSorceries, setShowSorceries ]         = useState(false);
    const [ showArtifacts, setShowArtifacts ]         = useState(false);
    const [ showEnchantments, setShowEnchantments ]   = useState(false);
    const [ showPlaneswalkers, setShowPlaneswalkers ] = useState(false);
    const [ showLands, setShowLands ]                 = useState(false);
    const [ renderElements, setRenderElements ]       = useState();
    
    function hideStats(value, operator) {
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
        operator(!value)
        setRenderElements(null);
        setShowSpinner(true);
    }
    
    // api call
    async function apiOptionsCall(id, options, value, operator) {
        hideStats(value, operator);

        await api.getAxiosEndpoint(endpoints.API_TOURNAMENT_STATS.replace('{id}', id).replace('{option}', options))
        .then((response) => {
            setTimeout(() => {setShowSpinner(false)}, 1000);
            setTimeout(() => {setRenderElements(response.data.stats)}, 1000);
        })
        .catch((err) => { 
            console.log('error League stats')
        });
    }

    // api call
    async function apiCardTypeCall(id, cardType, value, operator) {
        hideStats(value, operator);

        await api.getAxiosEndpoint(endpoints.API_TOURNAMENT_CARD_STATS.replace('{id}', id).replace('{cardType}', cardType))
        .then((response) => {
            console.log(response.data)
            setTimeout(() => {setShowSpinner(false)}, 1000);
            setTimeout(() => {setRenderElements(response.data.stats)}, 1000);
        })
        .catch((err) => { 
            console.log('error League card stats')
        });
    }

    const handleClickCardTypes = (cardType, value, operator) => {
        apiCardTypeCall(id, cardType, value, operator)
    }

    const handleClickOptions = (option, value, operator) => {
        apiOptionsCall(id, option, value, operator)
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
                    <li className={showTop10 === true ? "color-selected left line mb5" : "left line mb5"} onClick={() => handleClickOptions(statsTypes.TOP, showTop10, setShowTop10)}>
                        {optionStats(showTop10, "Top Cards")}
                    </li>
                    <li className={showMainboard === true ? "color-selected left line mb5" : "left line mb5"} onClick={() => handleClickOptions(statsTypes.MAINBOARD, showMainboard, setShowMainboard)}>
                        {optionStats(showMainboard, "Top Mainboard Cards")}
                    </li>
                    <li className={showSideboard === true ? "color-selected left line mb5" : "left line mb5"} onClick={() => handleClickOptions(statsTypes.SIDEBOARD, showSideboard, setShowSideboard)}>
                        {optionStats(showSideboard, "Top Sideboard Cards")}
                    </li>
                    <li className={showCreatures === true ? "color-selected left line mb5" : "left line mb5"} onClick={() => handleClickCardTypes(statsTypes.CREATURE, showCreatures, setShowCreatures)}>
                        {optionStats(showCreatures, "Top Creatures")}
                    </li>
                    <li className={showInstants === true ? "color-selected left line mb5" : "left line mb5"} onClick={() => handleClickCardTypes(statsTypes.INSTANT, showInstants, setShowInstants)}>
                        {optionStats(showInstants, "Top Instants")}
                    </li>
                    <li className={showSorceries === true ? "color-selected left line mb5" : "left line mb5"} onClick={() => handleClickCardTypes(statsTypes.SORCERY, showSorceries, setShowSorceries)}>
                        {optionStats(showSorceries, "Top Sorceries")}
                    </li>
                    <li className={showArtifacts === true ? "color-selected left line mb5" : "left line mb5"} onClick={() => handleClickCardTypes(statsTypes.ARTIFACT, showArtifacts, setShowArtifacts)}>
                        {optionStats(showArtifacts, "Top Artifacts")}
                    </li>
                    <li className={showEnchantments === true ? "color-selected left line mb5" : "left line mb5"} onClick={() => handleClickCardTypes(statsTypes.ENCHANTMENT, showEnchantments, setShowEnchantments)}>
                        {optionStats(showEnchantments, "Top Enchantments")}
                    </li>
                    <li className={showPlaneswalkers === true ? "color-selected left line mb5" : "left line mb5"} onClick={() => handleClickCardTypes(statsTypes.PLANESWALKER, showPlaneswalkers, setShowPlaneswalkers)}>
                        {optionStats(showPlaneswalkers, "Top Planeswalkers")}
                    </li>
                    <li className={showLands === true ? "color-selected left line mb5" : "left line mb5"} onClick={() => handleClickCardTypes(statsTypes.LAND, showLands, setShowLands)}>
                        {optionStats(showLands, "Top Lands")}
                    </li>
                </ul>
            </>
        )
    }

    return (
        <>
            <div className='left w100'>
                <div className="left wAuto mb20 statsBox">
                    {cardStats()}
                </div>
                <div className="right w74 showStatsCards">
                    <div className="wAuto cards">
                        {showSpinner === true &&
                            <BluredStatsList></BluredStatsList>
                        }    
                        {renderElements &&
                            <ListNoLink items={renderElements} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}