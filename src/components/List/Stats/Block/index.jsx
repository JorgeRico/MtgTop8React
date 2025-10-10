import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import "./module.css"
import Header from "/src/components/List/Stats/Block/Header";
import Content from "/src/components/List/Stats/Block/Content";

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
                <Content item={item} isPlayer={isPlayer} text={text} key={uuidv4()} />
            )));
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Header isPlayer={isPlayer} />
            {(items.length > 0) && (
                renderItems
            )}
        </>
    )
}