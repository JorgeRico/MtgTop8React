import React from "react";
import PropTypes from 'prop-types';
import HTag from "/src/components/HTag";
import LinkImage from "/src/components/Link/Image";
import BackImg from "/src/assets/images/back.png";

export default function BackLink(props) {
    BackLink.propTypes = {
        endpoint : PropTypes.string,
        title    : PropTypes.string
    };

    return (
        <>
            <div className="left w100 titleSection">
                <div className="left">                    
                    <LinkImage url={props.endpoint} img={BackImg} className="backLink invertColor" />
                </div>
                <div className="left">
                    <HTag Tag="h1" text={props.title} />
                </div>
            </div>
        </>
    )
}