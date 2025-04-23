import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function TournamentList(props) {
    const { url, items } = props;

    TournamentList.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    const tournamentItem = (item) => {
        return (
            <>
                <div className="left line description">
                    <div className="left">
                        <div className="circle orangeCircle"></div>
                        {item.date}
                    </div>
                    <div className="left ml15">
                        |
                    </div>
                    <div className="left ml15">
                        {item.name}
                    </div>
                    <div className="left ml15 separator">
                        |
                    </div>
                    <div className="left ml15 players">
                        {item.players} players
                    </div>
                    <div className="left ml40 color-selected f14 viewOption">
                        view tournament
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="tournaments">
                {(items.length > 0) && (
                    items.map((item) => (
                        <div key={uuidv4()} className="left w100 listItem pointer title mb20">
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