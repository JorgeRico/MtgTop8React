import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import "./module.css"
import TopStatsList from "/src/components/List/Normal/Stats/Top";
import ContentStatsList from "/src/components/List/Normal/Stats/Content";

export default function StatsList(props) {
    const { items, isPlayer, text }       = props;
    const effectRan                       = useRef(false);
    const [ renderItems, setRenderItems ] = useState(null)

    StatsList.propTypes = {
        items : PropTypes.array
    };

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item) => (
                <div className="left w100 cardItem" key={uuidv4()}>
                    <ContentStatsList item={item} isPlayer={isPlayer} text={text} />
                </div>   
            )));
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="left w100">
                <TopStatsList isPlayer={isPlayer} />
            </div>
            {(items.length > 0) && (
                renderItems
            )}
        </>
    )
}