import { createContext, useContext, useEffect } from "react";
import axios from 'axios';
import statsTypes from "/src/services/statsTypes.jsx"; 

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

    function indexConversionToText(num) {
        if (num == 1) {
            // add blank spaces
            return "1st\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
        }
        if (num == 2) {
            // add blank spaces
            return "2nd\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
        }
        if (num == 3 || num == 4) {
            return "3rd-4th";
        }
        if (num >= 5 && num <= 8) {
            return "5th-8th";
        }
        if (num >= 9 || num <= 16) {
            return "9th-16th";
        }
    }

    function createModalLink(name, modalType) {
        name = 'modal-' + modalType + '-' + name

        name = name.replace(/\s+/g, '-').toLowerCase();
        name = name.replace(' ', '-').toLowerCase();
        name = name.replace('\'', '-').toLowerCase();
        name = name.replace(',', '-').toLowerCase();
        name = name.replace('--', '-').toLowerCase();

        return name;
    }
    
    useEffect(() => {
        
    }, []);

    return (
        <ApiContext.Provider
            value={{
                getAxiosEndpoint,
                getFormat,
                indexConversionToText,
                createModalLink
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};

export const ApiConsumer = ApiContext.Consumer;

export const useApiContext = () => useContext(ApiContext);
