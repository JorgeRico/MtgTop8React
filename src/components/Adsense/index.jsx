import React, { useEffect, useRef } from 'react';
 
const AdSenseAd = ({ adClient, adSlot, adFormat = "auto", fullWidthResponsive = true }) => {
    const scriptLoaded   = useRef(false);
    const adContainerRef = useRef(null); // Ref to the ad container
    
    // Load AdSense script (once)
    useEffect(() => {
        if (!scriptLoaded.current) {
            const script = document.createElement('script');
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
            script.crossOrigin = 'anonymous';
            script.async = true;
            document.head.appendChild(script);
            scriptLoaded.current = true;
        }
    }, [adClient]);
    
    // Initialize the ad after the container is rendered
    useEffect(() => {
        if (adContainerRef.current && window.adsbygoogle) {
            // Push an empty object to trigger ad rendering
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
    }, [adSlot]); // Re-run if adSlot changes (e.g., different ad units)
    
    return (
        <ins 
            ref={adContainerRef} // Attach ref to track the container
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minWidth: '300px' }} // Ensure the ad takes full width and has a minimum width
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format={adFormat}
            data-full-width-responsive={fullWidthResponsive}
            // data-adtest="on"
        />
    );
};
 
export default AdSenseAd;