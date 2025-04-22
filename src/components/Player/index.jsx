import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import Deck from "/src/components/List/Deck";
import BluredBigList from "/src/components/Blured/FakeLists/BigList";
import "./module.css";
import PlayerItem from "/src/components/Player/Item";

export default function StatsPlayer(props) {
    const { items }                               = props;
    const effectRan                               = useRef(false);
    const [ renderItems, setRenderItems ]         = useState([]);
    const [ renderDeckItems, setRenderDeckItems ] = useState([]);
    const [ loading, setLoading ]                 = useState(false);

    StatsPlayer.propTypes = {
        items : PropTypes.array
    };

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items)
        }
        
        return () => effectRan.current = true;
         // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="left ml5">
                <ol>
                    {(items.length > 0) && (
                        items.map((item, index) => (
                            <PlayerItem item={item} index={index} setLoading={setLoading} setRenderDeckItems={setRenderDeckItems} key={uuidv4()}></PlayerItem>
                        ))
                    )}
                </ol>
            </div>
            <div className="left w70 cards">
                {loading === true &&
                    <div className="bluredDeck">
                        <BluredBigList></BluredBigList>
                    </div>
                }
                {renderDeckItems && (
                    <div className="pointer deck">
                        <Deck items={renderDeckItems} />
                    </div>   
                )}
            </div>
        </>
    )
}