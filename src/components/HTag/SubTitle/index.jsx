import React from "react";
import HTag from "/src/components/HTag";
import PropTypes from 'prop-types';

function SubTitle(props) {
    const { title } = props; 
   
    SubTitle.propTypes = {
        title : PropTypes.string,
    };

    return (
        <>
            <HTag Tag="h2" text={title} className="left mb15 f20" />
        </>
    );
}

export default SubTitle;