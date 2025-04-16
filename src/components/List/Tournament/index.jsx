import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import More from "/src/assets/images/more.png";

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
                <li key={uuidv4()} className="listItem pointer title">
                    <Link to={url + item.id}>
                        <div className="left line">
                            <div className="left w100">{item.name}</div>
                            <div className="left w100">{item.date}</div>
                            <div className="left w100">{item.players} players</div>
                        </div>
                        <div className="right">
                            <img src={More} alt="" className="invertColor settings absolute"/>
                        </div>
                    </Link>
                </li>
            )));
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <ul className="tournaments ml15">
                {(items.length > 0) && (
                    renderItems
                )}
            </ul>
        </>
    )
}