import 'babel-polyfill';
import 'whatwg-fetch';

const apiFetch = async (endpoint, options) => {
    const response = await fetch(endpoint, options);

    if(response.status >= 400 && response.status < 600 ) {
        const error = await response.text();
        throw new Error(error);
    }

    return JSON.parse(body);
};

export default apiFetch;
