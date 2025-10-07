import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useApi } from '/src/hooks/use-api.js';
import cupIcon from '/src/assets/images/cup.png';
import Block from "/src/components/List/Block/LeagueTournament";

export default function LeagueList(props) {
    const { url, item } = props;
    const api           = useApi();

    LeagueList.propTypes = {
        url  : PropTypes.string,
        item : PropTypes.array
    };

    return (
        <>
            <section className="listItem pointer title mb15 overflowHidden">
                <Link to={url + item.id}>
                    <Block
                        icon       = {cupIcon}
                        text1      = {item.name}
                        text2      = {`Format: ${api.getFormat(item.isLegacy)}`}
                        buttonText = "View league"
                    />
                </Link>
            </section>
        </>
    )
}