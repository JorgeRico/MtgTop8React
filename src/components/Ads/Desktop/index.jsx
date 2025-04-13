import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function GoogleAd(props) {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, [props.currentPath])

    return (
        <div 
            key={props.currentPath}
            style={{display: 'inline-block', textAlign: "center", width: '728px', height: '90px'}}
        >
            {/* <script src="https://pagead2.googlesyndication.com/pagead/show_ads.js"></script> */}
            <ins
                className="adsbygoogle"
                style={{display: 'inline-block', textAlign: "center", width: '728px', height: '90px'}}
                data-ad-client={props.googleAdId}
                data-ad-slot={props.slot}
                google_ad_width={728}
                google_ad_height={90}
            ></ins>
        </div>
    );
    
}

GoogleAd.propTypes = {
    slot       : PropTypes.string,
    googleAdId : PropTypes.string,
};

export default GoogleAd;