import React from "react";
import ListLink from "/src/components/Blured/Link";

function Home() {

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
                                {name: 'item 8 fake', date: 'date 8 fake'}
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

export default Home;