import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import AdSenseAd from "/src/components/Adsense";
import SeoTags from "/src/hooks/useSeo.jsx";

function Layout({ name, children, title, canonical = "", description }) {

    const classNameStyles = `overflowHidden container ${name}`;

    const AdSenseBox = () => {
        return (
            <AdSenseAd 
                adClassNameStyles   = {classNameStyles}
                adClient            = "ca-pub-9482818665347681" // Replace with your publisher ID
                adSlot              = "7691872894" // Replace with your banner ad slot ID
                adFormat            = "auto" // Fixed-size banner
                fullWidthResponsive = {true} 
            />
        )
    }

    return (
        (
            <>
                <SeoTags
                    title       = {title}
                    canonical   = {canonical}
                    description = {description}>
                </SeoTags>
                <Header classNameStyles={classNameStyles}></Header>
                <main className={classNameStyles}>
                    <section className={`left w100 ${name}`}>
                        <article className="pBody overflowHidden">
                            {children}
                        </article>
                    </section>
                </main>
                <AdSenseBox></AdSenseBox>
                <Footer></Footer>
                <Analytics></Analytics>
            </>
        )
    );
}

export default Layout;
