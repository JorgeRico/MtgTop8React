import SubTitle from "/src/components/HTag/SubTitle";
// import AdSenseAd from "/src/components/Adsense";
import Layout from "/src/views/layout/core";

function TemplateLayout({ name, title, canonical, description, breadcrumb, tournament, stats }) {
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
            <Layout 
                name        = {name}
                title       = {title}
                canonical   = {canonical}
                description = {description}
            >
                {breadcrumb}
                <section className="left w100">
                    {tournament}
                    {/* <AdSenseBox></AdSenseBox> */}
                    {stats}
                </section>
            </Layout>
        </>
    );
}

export default TemplateLayout;