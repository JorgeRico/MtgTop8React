import React from "react";
import ListLink from "/src/components/Blured/FakeLists/Link";
import "/src/components/Blured/FakeLists/module.css";

function BluredSmallList() {
    const items = [
        {name: 'item 1 fake', date: 'date 1 fake'}, 
        {name: 'item 2 fake', date: 'date 2 fake'}
    ];

    const bluredItems = () => {
        return (
            <>
                <div className="small">
                    <ListLink items={items} />
                </div>
            </>
        )
    }

    return (
        <>
            <div className="left w100 overflowHidden">
                {bluredItems()}
            </div>
        </>
    );
}

export default BluredSmallList;