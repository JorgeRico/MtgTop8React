import React from "react";
import statsTypes from "/src/services/statsTypes.jsx"
import "./module.css";
import CardBlockStats from "/src/components/List/Stats/Cards";

export default function StatsBox(props) {
    const { id, isLeague, endpoint, endpointCards, isBlured } = props;

    const cardStats = () => {
        return (
            <>
                {isLeague === true &&
                    <CardBlockStats
                        id={id}
                        text="Top Players" 
                        endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.PLAYERS)}
                        cardType={statsTypes.PLAYERS}
                        isPlayer={true}
                    />
                }

                <CardBlockStats
                    id={id}
                    text="Top Cards" 
                    endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.TOP)}
                    cardType={statsTypes.TOP}
                    isPlayer={false}
                />

                <CardBlockStats
                    id={id}
                    text="Top Creatures" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.CREATURE)}
                    cardType={statsTypes.CREATURE}
                    isPlayer={false}
                />

                <CardBlockStats
                    id={id}
                    text="Top Instants" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.INSTANT)}
                    cardType={statsTypes.INSTANT}
                    isPlayer={false}
                />

                <CardBlockStats
                    id={id}
                    text="Top Sorceries" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.SORCERY)}
                    cardType={statsTypes.SORCERY}
                    isPlayer={false}
                />

                <CardBlockStats
                    id={id}
                    text="Top Artifacts" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.ARTIFACT)}
                    cardType={statsTypes.ARTIFACT}
                    isPlayer={false}
                />

                <CardBlockStats
                    id={id}
                    text="Top Enchantments" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.ENCHANTMENT)}
                    cardType={statsTypes.ENCHANTMENT}
                    isPlayer={false}
                />
                
                <CardBlockStats
                    id={id}
                    text="Top Planeswalkers" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.PLANESWALKER)}
                    cardType={statsTypes.PLANESWALKER}
                    isPlayer={false}
                />
                
                <CardBlockStats
                    id={id}
                    text="Top Lands" 
                    endpoint={endpointCards.replace('{id}', id).replace('{cardType}', statsTypes.LAND)}
                    cardType={statsTypes.LAND}
                    isPlayer={false}
                />

                <CardBlockStats
                    id={id}
                    text="Top Mainboard Cards" 
                    endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.MAINBOARD)}
                    cardType={statsTypes.MAINBOARD}
                    isPlayer={false}
                />

                <CardBlockStats
                    id={id}
                    text="Top Sideboard Cards" 
                    endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.SIDEBOARD)}
                    cardType={statsTypes.SIDEBOARD}
                    isPlayer={false}
                />
            </>
        )
    }

    return (
        <>
            <section className={`left mt10 w100 ${isBlured ? 'blink blured' : ''}`}>
                <article className="mb20 statsBoxContent flex-container">
                    {cardStats()}
                </article>
            </section>
        </>
    );
}