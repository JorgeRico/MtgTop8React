import React from "react";
import ListLink from "/src/components/Blured/Link";

function BluredStatsList() {

    const bluredItems = () => {
        return (
            <>
                <div className="big">
                    <ListLink items={
                            [
                                {name: 'item 1 fake', date: 'date 1 fake'}, 
                                {name: 'item 2 fake', date: 'date 2 fake'},
                                {name: 'item 3 fake', date: 'date 3 fake'},   
                                {name: 'item 4 fake', date: 'date 4 fake'},
                                {name: 'item 5 fake', date: 'date 5 fake'},
                                {name: 'item 6 fake', date: 'date 6 fake'},
                                {name: 'item 7 fake', date: 'date 7 fake'},
                                {name: 'item 8 fake', date: 'date 8 fake'},
                                {name: 'item 9 fake', date: 'date 9 fake'}, 
                                {name: 'item 10 fake', date: 'date 10 fake'},
                                {name: 'item 11 fake', date: 'date 11 fake'},   
                                {name: 'item 12 fake', date: 'date 12 fake'},
                                {name: 'item 13 fake', date: 'date 13 fake'},
                                {name: 'item 14 fake', date: 'date 14 fake'},
                                {name: 'item 15 fake', date: 'date 15 fake'},
                                {name: 'item 16 fake', date: 'date 16 fake'}
                            ]
                        }
                    />
                </div>
            </>
        )
    }

    return (
        <>
            {bluredItems()}
        </>
    );
}

export default BluredStatsList;