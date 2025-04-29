import React from "react";
import { v4 as uuidv4 } from "uuid";
import LeagueItem from "/src/components/List/League/Item";

function BluredLeagueList() {
    const url = "#";
    const items = [
        {id: '', name: 'Fake League Item', isLegacy: 1}, 
        {id: '', name: 'Fake League Item', isLegacy: 1}
    ];

    return (
        <>
            <div className="left w100 overflowHidden mb30 blink blured">
                {items?.map((item) => (
                    <LeagueItem key={uuidv4()} url={url} item={item}></LeagueItem>
                ))}
            </div>
        </>
    )
}

export default BluredLeagueList;