import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import "./module.css";
import PlayerItem from "/src/components/List/Normal/Player/Item";

export default function TournamentPlayers(props) {
    const { items } = props;

    TournamentPlayers.propTypes = {
        items : PropTypes.array
    };

    return (
        <>
            {(items.length > 0) && (
                items.map((item, index) => (
                    <PlayerItem item={item} index={index} key={uuidv4()}></PlayerItem>
                ))
            )}
        </>
    )
}