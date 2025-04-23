import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import "./module.css";
import PlayerItem from "/src/components/List/Player/Item";
import HTag from "/src/components/HTag";

export default function TournamentPlayers(props) {
    const { items } = props;

    TournamentPlayers.propTypes = {
        items : PropTypes.array
    };

    return (
        <>
            <div className="left w100 mt20">
                <HTag Tag="h2" text={"Top Players"} className="left f24" />
            </div>
            {(items.length > 0) && (
                items.map((item, index) => (
                    <PlayerItem item={item} index={index} key={uuidv4()}></PlayerItem>
                ))
            )}
        </>
    )
}