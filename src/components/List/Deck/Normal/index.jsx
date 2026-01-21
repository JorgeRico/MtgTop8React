import "./module.css";
import DeckSideboard from "/src/components/List/Deck/Normal/Sideboard";
import DeckMainboard from "/src/components/List/Deck/Normal/Mainboard";
import DeckDescription from "/src/components/List/Deck/Normal/Description";

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
                </>
            )}
        </>
    )
}