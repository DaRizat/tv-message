import { handleActions } from 'redux-actions';

const initialState = {
    serviceHost: null,
    env: 'development'
};

export default handleActions({}, initialState);
