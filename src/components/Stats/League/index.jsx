import React, { useState } from "react";
import StatsList from "/src/components/List/Stats";
import endpoints from "/src/services/endpoints.js"
import statsTypes from "/src/services/statsTypes.js"
import BluredBigList from "/src/components/Blured/FakeLists/BigList";
import "./../module.css";
import CardStats from "/src/components/Stats/Cards";

export default function StatsBox(props) {
    const { id }                                = props;
    const [ loading, setLoading ]               = useState(false);
    const [ renderElements, setRenderElements ] = useState();

    const cardStats = () => {
        return (
            <>
                <ul>
                    <CardStats
                        id={id}
                        text="Top Players" 
                        endpoint={endpoints.API_LEAGUE_STATS.replace('{id}', id).replace('{option}', statsTypes.PLAYERS)}
                        cardType={statsTypes.PLAYERS} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
                    <CardStats
                        id={id}
                        text="Top Cards" 
                        endpoint={endpoints.API_LEAGUE_STATS.replace('{id}', id).replace('{option}', statsTypes.TOP)}
                        cardType={statsTypes.TOP} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
                    <CardStats
                        id={id}
                        text="Top Mainboard Cards" 
                        endpoint={endpoints.API_LEAGUE_STATS.replace('{id}', id).replace('{option}', statsTypes.MAINBOARD)}
                        cardType={statsTypes.MAINBOARD} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
                    <CardStats
                        id={id}
                        text="Top Sideboard Cards" 
                        endpoint={endpoints.API_LEAGUE_STATS.replace('{id}', id).replace('{option}', statsTypes.SIDEBOARD)}
                        cardType={statsTypes.SIDEBOARD} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
                    <CardStats
                        id={id}
                        text="Top Creatures" 
                        endpoint={endpoints.API_LEAGUE_CARD_STATS.replace('{id}', id).replace('{cardType}', statsTypes.CREATURE)}
                        cardType={statsTypes.CREATURE} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
                    <CardStats
                        id={id}
                        text="Top Instants" 
                        endpoint={endpoints.API_LEAGUE_CARD_STATS.replace('{id}', id).replace('{cardType}', statsTypes.INSTANT)}
                        cardType={statsTypes.INSTANT} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
                    <CardStats
                        id={id}
                        text="Top Sorceries" 
                        endpoint={endpoints.API_LEAGUE_CARD_STATS.replace('{id}', id).replace('{cardType}', statsTypes.SORCERY)}
                        cardType={statsTypes.SORCERY} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
                    <CardStats
                        id={id}
                        text="Top Artifacts" 
                        endpoint={endpoints.API_LEAGUE_CARD_STATS.replace('{id}', id).replace('{cardType}', statsTypes.ARTIFACT)}
                        cardType={statsTypes.ARTIFACT} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
                    <CardStats
                        id={id}
                        text="Top Enchantments" 
                        endpoint={endpoints.API_LEAGUE_CARD_STATS.replace('{id}', id).replace('{cardType}', statsTypes.ENCHANTMENT)}
                        cardType={statsTypes.ENCHANTMENT} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
                    <CardStats
                        id={id}
                        text="Top Planeswalkers" 
                        endpoint={endpoints.API_LEAGUE_CARD_STATS.replace('{id}', id).replace('{cardType}', statsTypes.PLANESWALKER)}
                        cardType={statsTypes.PLANESWALKER} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
                    <CardStats
                        id={id}
                        text="Top Lands" 
                        endpoint={endpoints.API_LEAGUE_CARD_STATS.replace('{id}', id).replace('{cardType}', statsTypes.LAND)}
                        cardType={statsTypes.LAND} 
                        setLoading={setLoading}
                        setRenderElements={setRenderElements}
                    />
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
                        {loading === true &&
                            <BluredBigList></BluredBigList>
                        }
                        {renderElements &&
                            <StatsList items={renderElements} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}