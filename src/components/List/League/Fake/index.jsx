import React from "react";
import { v4 as uuidv4 } from "uuid";
import LeagueList from "/src/components/List/League/Normal";
import league from "/src/fakeData/leagueList.js";

function BluredLeagueList() {
    return (
        <>
            <LeagueList key={uuidv4()} url={league.url} items={league.items} isBlured={true} ></LeagueList>
        </>
    )
}

export default BluredLeagueList;