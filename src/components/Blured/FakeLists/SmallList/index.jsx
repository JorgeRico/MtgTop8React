import React from "react";
import ListLink from "/src/components/Blured/Link";

function Home() {

    const bluredItems = () => {
        return (
            <>
                <div className="small">
                    <ListLink items={
                            [
                                {name: 'item 1 fake', date: 'date 1 fake'}, 
                                {name: 'item 2 fake', date: 'date 2 fake'}
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