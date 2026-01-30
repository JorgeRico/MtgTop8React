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
                    <article className="left w100">
                        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9482818665347681" crossOrigin="anonymous"></script>
                        <ins className="adsbygoogle"
                            style={{display:'block'}}
                            data-ad-format="autorelaxed"
                            data-ad-client="ca-pub-9482818665347681"
                            data-ad-slot="2151511143"></ins>
                        <script>
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>
                    </article>
                </>
            )}
        </>
    )
}