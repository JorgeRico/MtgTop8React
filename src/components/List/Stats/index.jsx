import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

export default function StatsList(props) {
    const { items }                       = props;
    const effectRan                       = useRef(false);
    const [ renderItems, setRenderItems ] = useState(null)

    StatsList.propTypes = {
        items : PropTypes.array
    };

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item) => (
                <li key={uuidv4()}>
                    <span className="left total center">{item.num}</span>  <span className="left ml15">{item.name}</span>
                </li>   
            )));
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <ul>
                <li className="titleStats">
                    <span className="left total center color-selected">Total</span>
                    <span className="left ml15 color-selected">Name</span>
                </li>
                {(items.length > 0) && (
                    renderItems
                )}
            </ul>
        </>
    )
}