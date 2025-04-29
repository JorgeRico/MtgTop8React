import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import "./module.css"

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
                <div className="left w100 item" key={uuidv4()}>
                    <span className="left ml25">{item.num}</span>
                    <span className="left ml25">{item.name}</span>
                </div>   
            )));
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="left w100">
                <div className="top overflowHidden">
                    <span className="left ml15">Total</span>
                    <span className="left ml15">Name</span>
                </div>
            </div>
            {(items.length > 0) && (
                renderItems
            )}
        </>
    )
}