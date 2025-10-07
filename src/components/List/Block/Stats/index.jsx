import React from "react";
import PropTypes from 'prop-types';
import Button from "/src/components/List/Button";

export default function Block(props) {
    const { text } = props;

    Block.propTypes = {
        text : PropTypes.string
    };

    return (
        <>
            <object className="left w100 mb10 bg-footer radius5">
                <div className="wAuto overflowHidden">
                    <div className="left wAuto padStatsBox">
                        <strong>{text}</strong>
                    </div>
                    <div className="right wAuto p10">
                        <Button buttonText="View Stats"></Button>
                    </div>
                </div>
            </object>
        </>
    )
}