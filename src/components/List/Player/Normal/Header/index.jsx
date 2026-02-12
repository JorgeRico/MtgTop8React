import BlockLine from "/src/components/List/Player/Normal/BlockLine";

export default function TournamentHeaderPlayers() {
    return (
        <>
            <section className="item left mb20 bg-footer border-red overflowHidden playersBoxHeader">
                <BlockLine
                    position = "#"
                    player   = "Player"
                    deck     = "Deck"
                    isHeader = {true}
                />
            </section>
        </>
    )
}