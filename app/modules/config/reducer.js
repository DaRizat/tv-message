import { handleActions } from 'redux-actions';
import queryString from 'query-string';

const query = queryString.parse(window.location.search);
const hostName = window.location.host;

let env = 'development';
let uiHost = 'localhost';
let serviceHost = 'http://localhost:3002';
let loginUrl = '';
let logoutUrl = '';

let match = hostName.match(/ui\.goodwaygroup\.com/);

if (match) {
    env = 'production';
} else {
    match = hostName.match(/(development|staging)/);
    if (match) {
        env = match[0];
    } else {
        env = query.env || 'development';
    }
}

const callback = encodeURIComponent(window.location.href);

switch (env) {
case 'production':
    uiHost = 'ui.goodwaygroup.com';
    serviceHost = 'https://services.goodwaygroup.com';
    loginUrl = `http://ui.goodwaygroup.com/login/broker/?callback=${callback}`;
    logoutUrl = `http://ui.goodwaygroup.com/login/logout/?callback=${callback}`;
    break;

case 'staging':
    uiHost = 'ui.staging.goodwaygroup.com';
    serviceHost = 'https://services.staging.goodwaygroup.com';
    loginUrl = `http://ui.staging.goodwaygroup.com/login/broker/?callback=${callback}`;
    logoutUrl = `http://ui.staging.goodwaygroup.com/login/logout/?callback=${callback}`;
    break;

default:
    uiHost = 'localhost:3001';
    serviceHost = 'http://localhost:3002';
    loginUrl = `http://localhost:3000/login/broker?callback=${callback}`;
    logoutUrl = `http://localhost:3000/login/logout/?callback=${callback}`;
    break;
}

const initialState = { uiHost, serviceHost, env, loginUrl, logoutUrl };

export default handleActions({}, initialState);
