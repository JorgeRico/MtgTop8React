import React from "react";
import HTag from "/src/components/HTag";

export default function LoadingOptions() {
    const items = [ 'Top Planeswalkers', 'Top Instants', 'Top Sorceries', 'Top Creatures', 'Top Lands', 'Top Artifacts' ];    

    const itemBox = (text) => {
        return (
            <>
                <div className="listItem left w100 cardsList">
                    <div className="left line w100">
                        <div className="circle orangeCircle"></div>
                        <HTag Tag="p" text={text} className="left wAuto pointer" />
                        <div className="right color-selected f14 mr20 pointer">view stats</div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='left w100 mt10 blink blured'>
                <div className="left w25 mb20 statsBox">
                    {items?.map((item) => (
                        itemBox(item)
                    ))}
                </div>
            </div>            
        </>
    )
}