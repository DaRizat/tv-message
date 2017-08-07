import { handleActions } from 'redux-actions';
import cookie from 'cookie';

const token = cookie.parse(document.cookie).goodwayAuthToken;

const initialState = {
    token,
    loggedIn: !!(token)
};

export default handleActions({}, initialState);
