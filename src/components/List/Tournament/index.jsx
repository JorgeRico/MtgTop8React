import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function TournamentLink(props) {
    const { url, items }                  = props;
    const effectRan                       = useRef(false);
    const [ renderItems, setRenderItems ] = useState(null)

    TournamentLink.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    useEffect(() => {
        if (!effectRan.current) {
            setRenderItems(items?.map((item) => (
                <>
                    <li key={uuidv4()} className="listItem pointer title">
                        <Link to={url + item.id}>
                            <div className="left line">
                                
                                <div className="left w100 item"><div className="circle orangeCircle"></div>{item.name}</div>
                            </div>
                        </Link>
                    </li>
                    <li key={uuidv4()} className="listItem pointer mb20">
                        <Link to={url + item.id}>
                            <div className="left line ml40">
                                <div className="left w100">Date: {item.date}</div>
                                <div className="left w100mt5">Players: {item.players}</div>
                            </div>
                        </Link>
                    </li>
                </>
            )));
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <ul className="tournaments">
                {(items.length > 0) && (
                    renderItems
                )}
            </ul>
        </>
    )
}