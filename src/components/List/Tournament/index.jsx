import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function TournamentLink(props) {
    const { url, items } = props;

    TournamentLink.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    return (
        <>
            <ul className="tournaments">
                {(items.length > 0) && (
                    items.map((item) => (
                        <li key={uuidv4()} className="listItem pointer title mb20">
                            <Link key={Math.random()} to={url + item.id}>
                                <div className="left line">
                                    <div className="left w100 item"><div className="circle orangeCircle"></div>{item.name}</div>
                                </div>
                                <div className="left line ml40">
                                    <div className="left w100 mt5">Date: {item.date}</div>
                                    <div className="left w100 mt5">Players: {item.players}</div>
                                </div>
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </>
    )
}