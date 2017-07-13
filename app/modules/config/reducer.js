import { handleActions } from 'redux-actions';

const initialState = {
    serviceHost: null,
    pixelId: null,
    jobId: null,
    advertiserId: null,
    env: 'development'
};

export default handleActions({}, initialState);
