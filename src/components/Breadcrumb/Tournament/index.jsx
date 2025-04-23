import React from "react";
import PropTypes from 'prop-types';
import "../module.css";
import HomeIcon from "/src/assets/images/home.png";
import { Link } from 'react-router-dom';
import ImageLink from "/src/components/Link/ImageLink";
import endpoints from "/src/services/endpoints.js"

function BreadcrumbTournament(props) {
    const { title, endpoint } = props; 
   
    BreadcrumbTournament.propTypes = {
        title    : PropTypes.string,
        endpoint : PropTypes.string
    };

    return (
        <>
            <div className="left homeIcon">
                <ImageLink url={endpoints.API_HOME} img={HomeIcon} className="backLink invertColor" />
            </div>
            <div className="left ml5">/</div>
            <div className="left ml10">
                <Link to={endpoint}>
                    Tournaments
                </Link>
            </div>
            <div className="left ml10">/</div>
            <div className="left ml10">
                {title}
            </div>
        </>
    );
}

export default BreadcrumbTournament;