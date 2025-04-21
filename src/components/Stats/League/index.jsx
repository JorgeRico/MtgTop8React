import React, { useState } from "react";
import HTag from "/src/components/HTag";
import ListNoLink from "/src/components/List/NoLink";
import endpoints from "/src/services/endpoints.js"
import statsTypes from "/src/services/statsTypes.js"
import { useApi } from '/src/hooks/use-api.js';
import { useParams } from 'react-router-dom';
import BluredStatsList from "/src/components/Blured/FakeLists/StatsList";
import "./../module.css";

export default function StatsBox() {
    const { id }                                      = useParams();
    const api                                         = useApi();
    const [ renderElements, setRenderElements ]       = useState();
    const [ showTop10, setShowTop10 ]                 = useState(false);
    const [ showPlayers, setShowPlayers ]             = useState(false);
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

    function hideStats(value, operator) {
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
        operator(!value)
        setRenderElements(null);
        setShowSpinner(true);
    }

    // api call
    async function apiOptionsCall(id, options, value, operator) {
        hideStats(value, operator);

        await api.getAxiosEndpoint(endpoints.API_LEAGUE_STATS.replace('{id}', id).replace('{option}', options))
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

        await api.getAxiosEndpoint(endpoints.API_LEAGUE_CARD_STATS.replace('{id}', id).replace('{cardType}', cardType))
        .then((response) => {
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
        let color = "left wAuto pointer" + (option === true ? " color-selected" : "")

        return (
            <>
                <div className="left line w100">
                    <div className="circle orangeCircle"></div>
                    <HTag Tag="p" text={topText} className={color} />
                </div>
            </>
        )
    }

    const leagueStatsElement = (option, statsType, optionOperator, text) => {
        let color = "listItem left line" + (option === true ? " color-selected" : "")

        return (
            <>
                <li className={color} onClick={() => handleClickOptions(statsType, option, optionOperator)}>
                    {optionStats(option, text)}
                </li>
            </>
        )
    }

    const cardStatsElement = (option, statsType, optionOperator, text) => {
        let color = "listItem left line" + (option === true ? " color-selected" : "")

        return (
            <>
                <li className={color} onClick={() => handleClickCardTypes(statsType, option, optionOperator)}>
                    {optionStats(option, text)}
                </li>
            </>
        )
    }
    
    const cardStats = () => {
        return (
            <>
                <ul>
                    {leagueStatsElement(showPlayers, statsTypes.PLAYERS, setShowPlayers, "Top Players")}
                    {leagueStatsElement(showTop10, statsTypes.TOP, setShowTop10, "Top Cards")}
                    {leagueStatsElement(showMainboard, statsTypes.MAINBOARD, setShowMainboard, "Top Mainboard Cards")}
                    {leagueStatsElement(showSideboard, statsTypes.SIDEBOARD, setShowSideboard, "Top Sideboard Cards")}
                    {cardStatsElement(showCreatures, statsTypes.CREATURE, setShowCreatures, "Top Creatures")}
                    {cardStatsElement(showInstants, statsTypes.INSTANT, setShowInstants, "Top Instants")}
                    {cardStatsElement(showSorceries, statsTypes.SORCERY, setShowSorceries, "Top Sorceries")}
                    {cardStatsElement(showArtifacts, statsTypes.ARTIFACT, setShowArtifacts, "Top Artifacts")}
                    {cardStatsElement(showEnchantments, statsTypes.ENCHANTMENT, setShowEnchantments, "Top Enchantments")}
                    {cardStatsElement(showPlaneswalkers, statsTypes.PLANESWALKER, setShowPlaneswalkers, "Top Planeswalkers")}
                    {cardStatsElement(showLands, statsTypes.LAND, setShowLands, "Top Lands")}
                </ul>
            </>
        )
    }

    return (
        <>
            <div className='left w100'>
                <div className="left w25 mb20 statsBox">
                    {cardStats()}
                </div>
                <div className="left w50 showStatsCards">
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