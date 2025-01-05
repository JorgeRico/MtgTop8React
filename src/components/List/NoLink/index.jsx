import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

export default function ListNoLink(props) {
    const { items }                       = props;
    const effectRan                       = useRef(false);
    const [ renderItems, setRenderItems ] = useState(null)

    ListNoLink.propTypes = {
        items : PropTypes.array
    };

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item) => (
                <li key={uuidv4()}>
                    {item.num} - {item.name}
                </li>   
            )));
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <ul>
                {(items.length > 0) && (
                    renderItems
                )}
            </ul>
        </>
    )
}