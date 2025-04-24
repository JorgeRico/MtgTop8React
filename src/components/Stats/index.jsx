import React from "react";
import statsTypes from "/src/services/statsTypes.js"
import "./module.css";
import CardStats from "/src/components/Stats/Cards";

export default function StatsBox(props) {
    const { id, isLeague, endpoint, endpointCards } = props;

    const cardStats = () => {
        return (
            <>
                {isLeague === true &&
                    <CardStats
                        id={id}
                        text="Top Players" 
                        endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.PLAYERS)}
                        cardType={statsTypes.PLAYERS}
                    />
                }
                <CardStats
                    id={id}
                    text="Top Cards" 
                    endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.TOP)}
                    cardType={statsTypes.TOP}
                />
                <CardStats
                    id={id}
                    text="Top Mainboard Cards" 
                    endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.MAINBOARD)}
                    cardType={statsTypes.MAINBOARD}
                />
                <CardStats
                    id={id}
                    text="Top Sideboard Cards" 
                    endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.SIDEBOARD)}
                    cardType={statsTypes.SIDEBOARD}
                />
                <CardStats
                    id={id}
                    text="Top Creatures" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.CREATURE)}
                    cardType={statsTypes.CREATURE}
                />
                <CardStats
                    id={id}
                    text="Top Instants" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.INSTANT)}
                    cardType={statsTypes.INSTANT}
                />
                <CardStats
                    id={id}
                    text="Top Sorceries" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.SORCERY)}
                    cardType={statsTypes.SORCERY}
                />
                <CardStats
                    id={id}
                    text="Top Artifacts" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.ARTIFACT)}
                    cardType={statsTypes.ARTIFACT}
                />
                <CardStats
                    id={id}
                    text="Top Enchantments" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.ENCHANTMENT)}
                    cardType={statsTypes.ENCHANTMENT}
                />
                <CardStats
                    id={id}
                    text="Top Planeswalkers" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.PLANESWALKER)}
                    cardType={statsTypes.PLANESWALKER}
                />
                <CardStats
                    id={id}
                    text="Top Lands" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.LAND)}
                    cardType={statsTypes.LAND}
                />
            </>
        )
    }

    return (
        <>
            <div className='left w100 mt10'>
                <div className="left w25 mb20 statsBox">
                    {cardStats()}
                </div>
            </div>
        </>
    );
}