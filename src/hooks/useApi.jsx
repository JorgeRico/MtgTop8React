import axios from 'axios';

 // axios
const headers = {
    'Content-Type'                 : 'application/json',
    'Access-Control-Allow-Origin'  : '*',
    'Access-Control-Allow-Headers' : 'Content-Type',
    'Access-Control-Allow-Methods' : 'GET',
}

export function getAxiosEndpoint(endpoint) {
    return axios.get(
        endpoint,
        { headers: headers }
    );
}