export default function BlockLine({ position, player, deck, isHeader = false }) {
    return (
        <>
            <div className="padTournamentBox w-20">
                {position}
            </div>
            <div className="padTournamentBox w-200 player">
                {player}
            </div>
            <div className={`padTournamentBox w-150 ${isHeader ? 'headerDeckName': 'deckName'}`}>
                {deck}
            </div>
        </>
    )
}