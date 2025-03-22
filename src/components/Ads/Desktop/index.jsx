import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleAd extends Component {
    googleInit = null;

    componentDidMount() {
        const { timeout } = this.props;
        this.googleInit = setTimeout(() => {
            if (typeof window !== 'undefined')
                (window.adsbygoogle = window.adsbygoogle || []).push({});
        }, timeout);
    }

    componentWillUnmount() {
        if (this.googleInit) clearTimeout(this.googleInit);
    }

    render() {
        const { classNames, slot, googleAdId } = this.props;
        return (
            <div className={classNames}>
                <ins
                className="adsbygoogle"
                style={{display: 'inline-block', textAlign: "center", width: '728px', height: '90px'}}
                data-ad-client={googleAdId}
                data-ad-slot={slot}
                data-full-width-responsive="true"
                ></ins>
            </div>
        );
    }
}

GoogleAd.propTypes = {
    classNames: PropTypes.string,
    slot: PropTypes.string,
    timeout: PropTypes.number,
    googleAdId: PropTypes.string,
};

GoogleAd.defaultProps = {
    classNames: '',
    timeout: 200,
};

export default GoogleAd;