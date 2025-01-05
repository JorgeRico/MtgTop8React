import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function LinkImage(props) {
    LinkImage.propTypes = {
        url       : PropTypes.string.isRequired,
        className : PropTypes.string,
        img       : PropTypes.string
    }

    return (
        <Link to={props.url} className={props.className} target="_blank">
            <>
                <img src={props.img} alt="" />
            </>
        </Link>
    );
}



