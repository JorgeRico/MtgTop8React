import { createContext, useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import statsTypes from "/src/services/statsTypes.js"; 

export const ApiContext = createContext({ undefined });

export const ApiProvider = (props) => {
    const { children } = props;

    // axios
    const headers = {
        'Content-Type'                 : 'application/json',
        'Access-Control-Allow-Origin'  : '*',
        'Access-Control-Allow-Headers' : 'Content-Type',
        'Access-Control-Allow-Methods' : 'GET',
    }

    function getAxiosEndpoint(endpoint) {
        return axios.get(
            endpoint,
            { headers: headers }
        );
    }

    function getFormat(format) {
        if (format === 1) {
            return statsTypes.LEGACY;
        }
        if (format === 0) {
            return statsTypes.VINTAGE;
        }
    } 
    
    useEffect(() => {
        
    }, []);

    return (
        <ApiContext.Provider
            value={{
                getAxiosEndpoint,
                getFormat
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};

ApiProvider.propTypes = {
    children: PropTypes.node
};

export const ApiConsumer = ApiContext.Consumer;

export const useApiContext = () => useContext(ApiContext);
