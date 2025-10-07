import React from "react";
import PropTypes from 'prop-types';
import Button from "/src/components/List/Button";

export default function BlockItem(props) {
    const { icon, text1, text2, buttonText } = props;

    BlockItem.propTypes = {
        icon       : PropTypes.string,
        text1      : PropTypes.string,
        text2      : PropTypes.string,
        buttonText : PropTypes.string,
    };

    return (
        <>
            <object className="left w100 mb10 bg-footer radius5">
                <div className="wAuto padBox overflowHidden">
                    <div className="cupBox border-grey left radius5 bg-blue p5 w-25">
                        <img src={icon} alt="Cup Champion" className="cupIcon w-15" />
                    </div>
                    <div className="left format wAuto ml25">
                        <strong>{text1}</strong>
                        <br></br>
                        <span className="left f12 mt5">
                            {text2}
                        </span>
                    </div>
                    <Button buttonText={buttonText}></Button>
                </div>
            </object>
        </>
    )
}