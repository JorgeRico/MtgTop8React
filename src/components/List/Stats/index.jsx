import statsTypes from "/src/services/statsTypes.jsx"
import "./module.css";
import CardBlockStats from "/src/components/List/Stats/Cards";
import SubTitle from "/src/components/HTag/SubTitle";
import HTag from "/src/components/HTag";
import StatsImage from "/src/components/Icons/Stats";

export default function StatsBox({ id, title, isLeague, endpoint, endpointCards, isBlured }) {
    const cardStats = () => {
        return (
            <>
                {isLeague === true &&
                    <>
                        <div className="left w100 grey-bottom">
                            <SubTitle title={
                                    <>
                                        <StatsImage></StatsImage>
                                        <span className="left ml5">Player Stats</span>
                                    </>
                                } 
                            />
                        </div>
                        <CardBlockStats
                            id={id}
                            text="Top Players" 
                            endpoint={endpoint.replace('{id}', id).replace('{option}', statsTypes.PLAYERS)}
                            cardType={statsTypes.PLAYERS}
                            isPlayer={true}
                        />
                    </>
                }

                <div className="left w100 grey-bottom">
                    <SubTitle title={
                            <>
                                <StatsImage></StatsImage>
                                <span className="left ml5">Card Stats</span>
                            </>
                        } 
                    />
                </div>
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
                
                <div className="left w100 grey-bottom">
                    <SubTitle title={
                            <>
                                <StatsImage></StatsImage>
                                <span className="left ml5">Deck Stats</span>
                            </>
                        } 
                    />
                </div>
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
                    <div className="left mt50 mb10 overflowHidden">
                        <HTag 
                            Tag       = "h2" 
                            className = "left f24 mb0" 
                            text      = "Stats"
                        />
                        <p className="left w100 color-gray mb0">{title}</p>
                        <p className="left w100 color-gray mb0">All tournament stats</p>
                        <p className="left w100 color-gray mb0">Most played cards and main deck and sideboard card stats</p>
                    </div>
                    {cardStats()}
                </article>
            </section>
        </>
    );
}