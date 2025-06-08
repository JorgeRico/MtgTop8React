import PropTypes from "prop-types";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import React, { useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
    

function Layout(props) {
    const effectRan = useRef(false);
    
     useEffect(() => {
            if (!effectRan.current) {
                // load cookie banner
                if (import.meta.env.VITE_APP_ENV === 'production') {
                    const script = document.createElement('script');
                    script.id    = "cookieyes"
                    script.src   = 'https://cdn-cookieyes.com/client_data/fa039951ac4a85e556944902/script.js';
                    script.async = true;
                    document.body.appendChild(script);
                }
            }
            
            return () => effectRan.current = true;
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

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

// Typechecking props for the Layout
Layout.propTypes = {
    children  : PropTypes.node.isRequired,
    name      : PropTypes.string 
};

export default Layout;
