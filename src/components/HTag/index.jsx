import React from 'react';
import PropTypes from 'prop-types';

export default function HTag(props) {
    const { Tag, className, text } = props;

    HTag.propTypes = {
        Tag       : PropTypes.string.isRequired,
        className : PropTypes.string,
        text      : PropTypes.string
    }

    return (
        <Tag className={className}>
            {text}
        </Tag>
    );
}