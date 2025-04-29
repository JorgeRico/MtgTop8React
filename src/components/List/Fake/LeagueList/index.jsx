import React from "react";
import { v4 as uuidv4 } from "uuid";
import LeagueItem from "/src/components/List/Normal/League/Item";
import league from "/src/fakeData/leagueList.js";

function BluredLeagueList() {
    return (
        <>
            <div className="left w100 overflowHidden mb30 blink blured">
                {league.items?.map((item) => (
                    <LeagueItem key={uuidv4()} url={league.url} item={item}></LeagueItem>
                ))}
            </div>
        </>
    )
}

export default BluredLeagueList;