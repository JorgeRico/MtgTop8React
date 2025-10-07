import React from "react";
import PropTypes from 'prop-types';

export default function Button(props) {
    const { buttonText } = props;

    Button.propTypes = {
        buttonText : PropTypes.string,
    };

    return (
        <>
            <button className="listButton right bg-blue border-grey radius5 color-white f14 pointer">
                {buttonText}
            </button>
        </>
    )
}