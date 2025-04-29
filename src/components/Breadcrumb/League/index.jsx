import React from "react";
import PropTypes from 'prop-types';
import "../module.css";
import HomeIcon from "/src/assets/images/home.png";
import ImageLink from "/src/components/Link/ImageLink";
import endpoints from "/src/services/endpoints.js";
import BluredBreadcrumb from "/src/components/Breadcrumb/Blured";

function BreadcrumbLeague(props) {
    const { title, loading } = props; 
   
    BreadcrumbLeague.propTypes = {
        title   : PropTypes.string,
        loading : PropTypes.bool
    };

    return (
        <>
            {loading === false ? (
                <BluredBreadcrumb></BluredBreadcrumb>
            ) : (
                <>
                    <div className="left homeIcon">
                        <ImageLink url={endpoints.API_HOME} img={HomeIcon} className="backLink invertColor" />
                    </div>
                    <div className="left ml10">/</div>
                    <div className="left ml10">
                        {title}
                    </div>
                </>
            )}
        </>
    );
}

export default BreadcrumbLeague;