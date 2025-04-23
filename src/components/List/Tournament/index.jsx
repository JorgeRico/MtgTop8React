import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HTag from "/src/components/HTag";

export default function TournamentList(props) {
    const { url, items } = props;

    TournamentList.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    return (
        <>
            <div className="tournaments">
                <div className="left w100 mb30">
                    <HTag Tag="h2" text={"Tournaments"} className="left f24 mb5" />
                    <div className="left w100 f14">Format: Legacy</div>
                </div>
                {(items.length > 0) && (
                    items.map((item) => (
                        <div key={uuidv4()} className="left w100 listItem pointer title mb20">
                            <Link key={Math.random()} to={url + item.id}>
                                <div className="left line">
                                    <div className="left"><div className="circle orangeCircle"></div>{item.date}</div>
                                    <div className="left ml15"> | </div>
                                    <div className="left ml15">{item.name}</div>
                                    <div className="left ml15"> | </div>
                                    <div className="left ml15">{item.players} players</div>
                                    <div className="left ml40 color-selected f14">view tournament</div>
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}