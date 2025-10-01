import React from "react";
import { v4 as uuidv4 } from "uuid";
import stats from "/src/fakeData/statsList.js";

function LoadingCards() {
    return (
        <>
            <div className="left w100 overflowHidden blink blured">
                <ul>
                    {stats.map(item =>
                        <li key={uuidv4()} className="listItem pointer title blured">
                            <div className="left line w100">
                                {item.num} - {item.name}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default LoadingCards;