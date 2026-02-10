import axios from 'axios';

 // axios
const headers = {
    'Content-Type'                 : 'application/json',
    'Access-Control-Allow-Origin'  : '*',
    'Access-Control-Allow-Headers' : 'Content-Type',
    'Access-Control-Allow-Methods' : 'GET',
}

export function getAxiosEndpoint (endpoint) {
    return axios.get(
        endpoint,
        { headers: headers }
    );
}

export function addUrlPaginationParams (endpoint, numItems, currentPage) {
    const url        = new URL(endpoint);
    const pagination = url.searchParams;

    pagination.set('limit', numItems);
    pagination.set('page', currentPage);
    
    return url.toString();
}

export function replaceUrlIdParam (endpoint, value) {
    return endpoint.replace('{id}', value)
}