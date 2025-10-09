import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cupIcon from '/src/assets/images/cup.png';
import Button from "/src/components/List/Button";

export default function TournamentList(props) {
    const { url, items } = props;

    TournamentList.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    const tournamentItem = (icon, text1, text2, buttonText) => {
        return (
            <>
                <div className="left w100 mb10 bg-footer radius5">
                    <div className="wAuto padBox overflowHidden">
                        <div className="cupBox border-grey left radius5 bg-blue p5 w-25">
                            <img src={icon} alt="Cup Champion" className="cupIcon w-15" />
                        </div>
                        <div className="left format wAuto ml25">
                            <strong>{text1}</strong>
                            <br></br>
                            <span className="left f12 mt5" style={{whiteSpace: 'pre-wrap'}}>
                                {text2}
                            </span>
                        </div>
                        <Button buttonText={buttonText}></Button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <section className="tournaments">
                {(items.length > 0) && (
                    items.map((item) => (
                        <div key={uuidv4()} className="left w100 listItem pointer title">
                            <Link key={Math.random()} to={url + item.id}>
                                {tournamentItem(cupIcon, item.name, `Date: ${item.date}   |   ${item.players} players`, "View Tournament")}
                            </Link>
                        </div>
                    ))
                )}
            </section>
        </>
    )
}