import React from "react";
import PropTypes from 'prop-types';
import HTag from "/src/components/HTag";
import ImageNoBlankLink from "/src/components/Link/ImageNoBlankLink";
import BackImg from "/src/assets/images/back.png";
import "./module.css";

export default function BackLink(props) {
    BackLink.propTypes = {
        endpoint : PropTypes.string,
        title    : PropTypes.string
    };

    return (
        <>
            <div className="left w100 titleSection">
                <div className="left">                    
                    <ImageNoBlankLink url={props.endpoint} img={BackImg} className="backLink invertColor" />
                </div>
                <div className="left">
                    <HTag Tag="h1" text={props.title} />
                </div>
            </div>
        </>
    )
}