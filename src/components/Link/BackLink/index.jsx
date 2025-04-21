import React from "react";
import PropTypes from 'prop-types';
import HTag from "/src/components/HTag";
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
                    <HTag Tag="h1" text={props.title} className="f20" />
                </div>
            </div>
        </>
    )
}