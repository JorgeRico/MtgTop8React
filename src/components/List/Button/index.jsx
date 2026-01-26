import React from "react";

export default function Button(props) {
    const { buttonText, id } = props;

    return (
        <>
            <button id={id} className="listButton right bg-red border-grey radius5 color-white f14 pointer">
                {buttonText}
            </button>
        </>
    )
}