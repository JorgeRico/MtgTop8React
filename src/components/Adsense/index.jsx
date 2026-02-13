import { useEffect, useRef } from 'react';
 
const AdSenseAd = ({ adClient, adSlot, adFormat = "rspv", fullWidthResponsive = true, adClassNameStyles = "" }) => {
    const scriptLoaded   = useRef(false);
    const adContainerRef = useRef(null);
    
    // Load AdSense script (once)
    // useEffect(() => {
    //     if (!scriptLoaded.current) {
    //         const script = document.createElement('script');
    //         script.src = `https://cdn.ampproject.org/v0/amp-ad-0.1.js`;
    //         script.customElement = 'amp-ad';
    //         script.async = true;
    //         document.head.appendChild(script);
    //         scriptLoaded.current = true;
    //     }
    // }, [adClient]);
    
    return (
        <div className={`left w100 ${adClassNameStyles} ad-container`}>
            <amp-ad width="100vw" height="320"
                ref={adContainerRef} // Attach ref to track the container
                type="adsense"
                ddata-ad-client={adClient}
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width="">
                <div overflow=""></div>
            </amp-ad>    
        </div>
        
    );
};
 
export default AdSenseAd;