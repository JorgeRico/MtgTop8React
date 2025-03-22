import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const MobileContext = createContext({ undefined });

export const MobileProvider = (props) => {
    const { children }              = props;
    const [ isMobile, setIsMobile ] = useState(false);

    function handleResize () {
        if (window.innerWidth < 800) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    function getIsMobile () {
        return isMobile;
    }

    useEffect(() => {
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, [window.innerWidth]);

    return (
        <MobileContext.Provider
            value={{
                handleResize,
                getIsMobile
            }}
        >
            {children}
        </MobileContext.Provider>
    );
};

MobileProvider.propTypes = {
    children: PropTypes.node
};

export const MobileConsumer = MobileContext.Consumer;

export const useMobileContext = () => useContext(MobileContext);
