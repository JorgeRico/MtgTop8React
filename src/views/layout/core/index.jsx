import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
                <div className={`overflowHidden container ${props.name}`}>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9482818665347681" crossOrigin="anonymous"></script>
                    <ins className="adsbygoogle"
                        style={{display:'block'}}
                        data-ad-client="ca-pub-9482818665347681"
                        data-ad-slot="7691872894"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>    
                </div>
                <Footer></Footer>
                <Analytics></Analytics>
            </>
        )
    );
}

export default Layout;
