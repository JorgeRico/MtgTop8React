import React from "react";

export default function Button(props) {
    const { buttonText } = props;

    return (
        <>
            <button className="listButton right bg-red border-grey radius5 color-white f14 pointer">
                {buttonText}
            </button>
        </>
    )
}