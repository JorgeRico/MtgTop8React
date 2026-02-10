import "./module.css";
import DeckSideboard from "/src/components/List/Deck/Normal/Sideboard";
import DeckMainboard from "/src/components/List/Deck/Normal/Mainboard";
import DeckDescription from "/src/components/List/Deck/Normal/Description";
// import AdSenseAd from "/src/components/Adsense";

export default function Deck(props) {
    const { items, deckName, isBlured } = props;

    return (
        <>
            {items.length > 0 && (
                <>
                    <div className={isBlured ? "blink blured" : ""}>
                        <DeckDescription items={items} deckName={deckName}></DeckDescription>
                        <DeckMainboard items={items}></DeckMainboard>
                        <DeckSideboard items={items}></DeckSideboard>
                    </div>
                    {/* <AdSenseAd 
                        adClient            = "ca-pub-9482818665347681" // Replace with your publisher ID
                        adSlot              = "2151511143" // Replace with your banner ad slot ID
                        adFormat            = "auto" // Fixed-size banner
                        fullWidthResponsive = {true} 
                    /> */}
                </>
            )}
        </>
    )
}