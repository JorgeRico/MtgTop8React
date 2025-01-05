import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function LinkNoImage(props) {
    LinkNoImage.propTypes = {
        url       : PropTypes.string.isRequired,
        text      : PropTypes.string,
        className : PropTypes.string
    }

    return (
        <Link to={props.url} className={props.className}>
            <>
                {props.text}
            </>
        </Link>
    );
}



