import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Block from "/src/components/List/Block/LeagueTournament";
import cupIcon from '/src/assets/images/cup.png';

export default function TournamentList(props) {
    const { url, items } = props;

    TournamentList.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    const tournamentItem = (item) => {
        return (
            <>
                <Block
                    icon       = {cupIcon}
                    text1      = {item.name}
                    text2      = {`Date: ${item.date}   |   ${item.players} players`}
                    buttonText = "View Tournament"
                />
            </>
        )
    }

    return (
        <>
            <div className="tournaments">
                {(items.length > 0) && (
                    items.map((item) => (
                        <div key={uuidv4()} className="left w100 listItem pointer title">
                            <Link key={Math.random()} to={url + item.id}>
                                {tournamentItem(item)}
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}