import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function LinkImage(props) {
    LinkImage.propTypes = {
        url       : PropTypes.string.isRequired,
        className : PropTypes.string,
        img       : PropTypes.string,
        title     : PropTypes.string,
        width     : PropTypes.string
    }

    return (
        <Link to={props.url} className={props.className} target="_blank" rel="noopener noreferrer" title={props.title}>
            <>
                <img src={props.img} alt={props.title} title={props.title} width={props.width} height={props.width}/>
            </>
        </Link>
    );
}



