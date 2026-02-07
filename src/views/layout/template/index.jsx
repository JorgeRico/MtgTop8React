import React from "react";
import SubTitle from "/src/components/HTag/SubTitle";
import AdSenseAd from "/src/components/Adsense";

function League(props) {
    const { breadcrumb, tournament, stats, title } = props;

    return (
        <>
            <div className="left w100 pb10 f14">
                {breadcrumb}
            </div>
            <div className="left w100 mt20">
                {tournament}
                <div className="left w100 mt10 ad-container">
                    <AdSenseAd 
                        adClient="ca-pub-9482818665347681" // Replace with your publisher ID
                        adSlot="8739796769" // Replace with your banner ad slot ID
                        adFormat="auto" // Fixed-size banner
                        fullWidthResponsive={true} 
                    />
                </div>
                <div className="left w100 mt50">
                    <SubTitle title={title} />
                </div>
                <div className="left w100 mt10">
                    {stats}
                </div>
            </div>
        </>
    );
}

export default League;