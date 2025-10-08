import React from "react";
import { v4 as uuidv4 } from "uuid";
import options from "/src/fakeData/statsOptionsList.js";
import CardStats from "/src/components/Stats/Cards";

export default function LoadingOptions() {
    const itemBox = (item) => {
        // print fake data
        return (
            <>
                <CardStats
                    id={uuidv4()}
                    text={item}
                    endpoint={""}
                    cardType={item}
                    isPlayer={true}
                />
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