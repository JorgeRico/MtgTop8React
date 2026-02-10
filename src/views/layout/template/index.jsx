import React from "react";
import SubTitle from "/src/components/HTag/SubTitle";
// import AdSenseAd from "/src/components/Adsense";

function TemplateLayout({ breadcrumb, tournament, stats, title }) {
    // const AdSenseBox = () => {
    //     return (
    //         <AdSenseAd 
    //             adClassNameStyles   = "mt10"
    //             adClient            = "ca-pub-9482818665347681" // Replace with your publisher ID
    //             adSlot              = "8739796769" // Replace with your banner ad slot ID
    //             adFormat            = "auto" // Fixed-size banner
    //             fullWidthResponsive = {true} 
    //         />
    //     )
    // }

    return (
        <>
            {breadcrumb}
            <section className="left w100 mt20">
                {tournament}
                {/* <AdSenseBox></AdSenseBox> */}
                <div className="left w100 mt50">
                    <SubTitle title={title} />
                </div>
                {stats}
            </section>
        </>
    );
}

export default TemplateLayout;