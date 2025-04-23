import React from "react";
import PropTypes from 'prop-types';
import "./../module.css";
import HomeIcon from "/src/assets/images/home.png";
import { Link } from 'react-router-dom';
import ImageNoBlankLink from "/src/components/Link/ImageNoBlankLink";
import endpoints from "/src/services/endpoints.js"

function BreadcrumbTournament(props) {
    const { title, endpoint } = props; 
   
    BreadcrumbTournament.propTypes = {
        title    : PropTypes.string,
        endpoint : PropTypes.string
    };

    return (
        <>
            <div className="left w100 pb10 mb10 f14">
                <div className="left homeIcon">
                    <ImageNoBlankLink url={endpoints.API_HOME} img={HomeIcon} className="backLink invertColor" />
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
            </div>
        </>
    );
}

export default BreadcrumbTournament;