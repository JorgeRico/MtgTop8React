import React, { Component } from 'react';
import PropTypes from 'prop-types';
class GoogleAd extends Component {
    render() {
        const { classNames, slot, googleAdId } = this.props;
        return (
            <div className={classNames}>
                <ins
                className="adsbygoogle"
                style={{display: 'block'}}
                data-ad-client={googleAdId}
                data-ad-slot={slot}
                data-ad-format="auto"
                data-full-width-responsive="true"
                ></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
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