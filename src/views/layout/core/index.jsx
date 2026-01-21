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
                <Footer></Footer>
                <Analytics></Analytics>
            </>
        )
    );
}

export default Layout;
