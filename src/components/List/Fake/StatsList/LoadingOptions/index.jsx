import React from "react";
import HTag from "/src/components/HTag";
import { v4 as uuidv4 } from "uuid";
import options from "/src/fakeData/statsOptionsList.js";

export default function LoadingOptions() {
    const itemBox = (text) => {
        return (
            <>
                <div className="left line w100">
                    <div className="circle orangeCircle"></div>
                    <HTag Tag="p" text={text} className="left wAuto pointer" />
                    <div className="right color-selected f14 mr20 pointer">view stats</div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='left w100 mt10 blink blured'>
                <div className="left w25 mb20 statsBox">
                    {options?.map((item) => (
                        <div className="listItem left w100 cardsList" key={uuidv4()}>
                            {itemBox(item)}
                        </div>
                    ))}
                </div>
            </div>            
        </>
    )
}