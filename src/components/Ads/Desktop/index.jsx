import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function GoogleAd(props) {
    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
        console.log(props.currentPath)
      }, [props.currentPath])

    return (
        <div 
            key={props.currentPath}
            style={{display: 'inline-block', textAlign: "center", width: '728px', height: '90px'}}
        >
            <ins
                className="adsbygoogle"
                style={{display: 'inline-block', textAlign: "center", width: '728px', height: '90px'}}
                data-ad-client={props.googleAdId}
                data-ad-slot={props.slot}
            ></ins>
        </div>
    );
    
}

GoogleAd.propTypes = {
    slot       : PropTypes.string,
    googleAdId : PropTypes.string,
};

export default GoogleAd;