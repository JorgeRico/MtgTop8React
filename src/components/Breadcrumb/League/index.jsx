import React from "react";
import PropTypes from 'prop-types';
import "./../module.css";
import HomeIcon from "/src/assets/images/home.png";
import ImageNoBlankLink from "/src/components/Link/ImageNoBlankLink";
import endpoints from "/src/services/endpoints.js"

function BreadcrumbLeague(props) {
    const { title } = props; 
   
    BreadcrumbLeague.propTypes = {
        title : PropTypes.string,
    };

    return (
        <>
            <div className="left w100 pb10 mb10 f14">
                <div className="left homeIcon">
                    <ImageNoBlankLink url={endpoints.API_HOME} img={HomeIcon} className="backLink invertColor" />
                </div>
                <div className="left ml10">/</div>
                <div className="left ml10">
                    {title}
                </div>
            </div>
        </>
    );
}

export default BreadcrumbLeague;