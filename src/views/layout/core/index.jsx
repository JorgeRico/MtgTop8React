import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import AdSenseAd from "/src/components/Adsense";

function Layout(props) {

    return (
        (
            <>
                <div className={`overflowHidden container ${props.name}`}>
                    <Header></Header>
                </div>
                <div className="left w100 topLine"></div>
                <div className={`overflowHidden container ${props.name}`}>
                    <div className={`left w100 ${props.name}`}>
                        <div className="pBody overflowHidden">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div className={`overflowHidden container ${props.name} ad-container`}>
                    <AdSenseAd 
                        adClient="ca-pub-9482818665347681" // Replace with your publisher ID
                        adSlot="7691872894" // Replace with your banner ad slot ID
                        adFormat="auto" // Fixed-size banner
                        fullWidthResponsive={true} 
                    />
                </div>
                <Footer></Footer>
                <Analytics></Analytics>
            </>
        )
    );
}

export default Layout;
