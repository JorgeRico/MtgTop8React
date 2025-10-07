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
                        isPlayer={true}
                    />
                }
                <CardStats
                    id={id}
                    text="Top Cards" 
                    endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.TOP)}
                    cardType={statsTypes.TOP}
                    isPlayer={false}
                />
                <CardStats
                    id={id}
                    text="Top Mainboard Cards" 
                    endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.MAINBOARD)}
                    cardType={statsTypes.MAINBOARD}
                    isPlayer={false}
                />
                <CardStats
                    id={id}
                    text="Top Sideboard Cards" 
                    endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.SIDEBOARD)}
                    cardType={statsTypes.SIDEBOARD}
                    isPlayer={false}
                />
                <CardStats
                    id={id}
                    text="Top Creatures" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.CREATURE)}
                    cardType={statsTypes.CREATURE}
                    isPlayer={false}
                />
                <CardStats
                    id={id}
                    text="Top Instants" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.INSTANT)}
                    cardType={statsTypes.INSTANT}
                    isPlayer={false}
                />
                <CardStats
                    id={id}
                    text="Top Sorceries" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.SORCERY)}
                    cardType={statsTypes.SORCERY}
                    isPlayer={false}
                />
                <CardStats
                    id={id}
                    text="Top Artifacts" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.ARTIFACT)}
                    cardType={statsTypes.ARTIFACT}
                    isPlayer={false}
                />
                <CardStats
                    id={id}
                    text="Top Enchantments" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.ENCHANTMENT)}
                    cardType={statsTypes.ENCHANTMENT}
                    isPlayer={false}
                />
                <CardStats
                    id={id}
                    text="Top Planeswalkers" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.PLANESWALKER)}
                    cardType={statsTypes.PLANESWALKER}
                    isPlayer={false}
                />
                <CardStats
                    id={id}
                    text="Top Lands" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.LAND)}
                    cardType={statsTypes.LAND}
                    isPlayer={false}
                />
            </>
        )
    }

    return (
        <>
            <div className='left w100 mt10'>
                <div className="left w-350 mb20">
                    {cardStats()}
                </div>
            </div>
        </>
    );
}