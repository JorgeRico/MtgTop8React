import PlayerList from "/src/components/List/Player/Normal";
import players from "/src/fakeData/playerList.jsx";

function TournamentPlayersBlured() {
    return (
        <>
            <PlayerList items={players} isBlured={true} />
        </>
    )
}

export default TournamentPlayersBlured;