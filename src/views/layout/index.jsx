import PropTypes from "prop-types";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import React, { useRef, useEffect } from "react";
function Layout(props) {
    const effectRan = useRef(false);

    useEffect(() => {
        if (!effectRan.current) {
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            console.log(height)
        }
        
        return () => effectRan.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        (
            <>
                 <div className={`container ${props.name}`}>
                    <Header></Header>
                    <div className={`left w100 ${props.name}`}>
                        {props.children}
                    </div>
                    <Footer></Footer>
                </div> 
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
