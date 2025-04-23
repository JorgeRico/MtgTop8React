import React from "react";
import HTag from "/src/components/HTag";
import PropTypes from 'prop-types';

function Title(props) {
    const { title } = props; 
   
    Title.propTypes = {
        title : PropTypes.string,
    };

    return (
        <>
            <HTag Tag="h2" text={title} className="left mb15 f24" />
        </>
    );
}

export default Title;