import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import "./module.css"
import Modal from "/src/components/Modal"

export default function StatsList(props) {
    const { items, isPlayer }             = props;
    const effectRan                       = useRef(false);
    const [ renderItems, setRenderItems ] = useState(null)

    console.log(isPlayer)

    StatsList.propTypes = {
        items : PropTypes.array
    };

    const topPlayerStats = () => {
        return (
            <>
                <div className="top overflowHidden">
                    <span className="left ml25">Total</span>
                    <span className="left ml15">Name</span>
                </div>
            </>
        )
    }

    const playerStats = (item) => {
        return (
            <>
                <span className="left ml30 center w-25">{item.num}</span>
                <span className="left ml20">
                    {item.name}
                </span>
            </>
        )
    }

    const topCardStats = () => {
        return (
            <>
                <div className="top overflowHidden">
                    <span className="left ml15 w-15">&nbsp;</span>
                    <span className="left ml15">Total</span>
                    <span className="left ml15">Name</span>
                </div>
            </>
        )
    }

    const cardStats = (item) => {
        return (
            <>
                
                <span className="left ml15">
                    <Modal img={item.imgUrl} />
                </span>
                <span className="left ml10 w-30 center">{item.num}</span>
                <span className="left ml20">
                    {item.name}
                </span>
            </>
        )
    }

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item) => (
                <div className="left w100 item" key={uuidv4()}>
                    {(isPlayer === true) ? (
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
                {isPlayer === true ? (
                        topPlayerStats()
                    ) : (
                        topCardStats()
                    )
                }
            </div>
            {(items.length > 0) && (
                renderItems
            )}
        </>
    )
}