import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import "./module.css";
import PlayerItem from "/src/components/List/Player/Normal/Item";
import TournamentHeaderPlayers from "/src/components/List/Player/Normal/Header";

export default function TournamentPlayers(props) {
    const { items, isBlured } = props;

    TournamentPlayers.propTypes = {
        items    : PropTypes.array,
        isBlured : PropTypes.bool
    };

    return (
        <>
            <section className={isBlured ? "blink blured" : ""}>
                <TournamentHeaderPlayers></TournamentHeaderPlayers>
                {(items.length > 0) && (
                    items.map((item, index) => (
                        <PlayerItem item={item} index={index} key={uuidv4()}></PlayerItem>
                    ))
                )}
            </section>
        </>
    )
}