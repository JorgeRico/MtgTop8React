import PropTypes from "prop-types";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import React, { useRef, useEffect } from "react";
function Layout(props) {
    // const effectRan = useRef(false);

    // useEffect(() => {
    //     if (!effectRan.current) {
    //         var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    //     }
        
    //     return () => effectRan.current = true;
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        (
            <>
                <div className={`overflowHidden container ${props.name}`}>
                    <Header></Header>
                </div>
                <div className="left w100 topLine"></div>
                <div className={`overflowHidden container ${props.name}`}>
                    <div className={`left w100 ${props.name}`}>
                        <div className="p20 overflowHidden">
                            {props.children}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
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
