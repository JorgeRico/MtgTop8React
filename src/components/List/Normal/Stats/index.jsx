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

    const playerStats = (item) => {
        return (
            <>
                <span className="left ml15">
                    <img src={item.imgUrl} className="cardImgUrl"></img>
                </span>
                <span className="left ml15 center w-15">{item.num}</span>
                <span className="left ml40">
                    {item.name}
                </span>
            </>
        )
    }

    const cardStats = (item) => {
        return (
            <>
                <span className="left ml25">
                    &nbsp;
                </span>
                <span className="left ml20 center w-15">{item.num}</span>
                <span className="left ml40">
                    {item.name}
                </span>
            </>
        )
    }

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item) => (
                <div className="left w100 item" key={uuidv4()}>
                    {(item.imgUrl !== undefined && item.imgUrl != null) ? (
                        playerStats(item)
                    ) : (
                        cardStats(item)
                    )}
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
                    <span className="left ml15">&nbsp;</span>
                    <span className="left ml25">Total</span>
                    <span className="left ml25">Name</span>
                </div>
            </div>
            {(items.length > 0) && (
                renderItems
            )}
        </>
    )
}