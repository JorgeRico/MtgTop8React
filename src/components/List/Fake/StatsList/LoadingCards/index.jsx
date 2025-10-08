import React from "react";
import { v4 as uuidv4 } from "uuid";
import stats from "/src/fakeData/statsList.js";
import ContentStatsList from "/src/components/List/Normal/Stats/Content";

function LoadingCards() {
    return (
        <>
            <div className="left w100 overflowHidden blink blured">
                {stats.map(item =>
                    <div className="left w100 cardItem" key={uuidv4()}>
                        <ContentStatsList item={item} isPlayer={false} text={item.name} />
                    </div>  
                )}
            </div>
        </>
    );
}

export default LoadingCards;