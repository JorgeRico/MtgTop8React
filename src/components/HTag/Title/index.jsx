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
            <HTag Tag="h1" className="f24" text={title} />
        </>
    );
}

export default Title;