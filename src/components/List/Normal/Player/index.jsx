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
            <section>
                <div className="playersListHeader grey-bottom bg-footer">
                    <div className="padTournamentBox w-20">
                        #
                    </div>
                    <div className="padTournamentBox w-200">
                        Player
                    </div>
                    <div className="padTournamentBox w-150 headerDeckName">
                        Deck
                    </div>
                </div>
            </section>
            {(items.length > 0) && (
                items.map((item, index) => (
                    <PlayerItem item={item} index={index} key={uuidv4()}></PlayerItem>
                ))
            )}
        </>
    )
}