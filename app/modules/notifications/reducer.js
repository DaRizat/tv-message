import { handleActions } from 'redux-actions';
import Actions from './actions';

const initialState = {
    loading: false,
    success: [],
    errors: []
};

export default handleActions({
    [Actions.LOAD_START]: state => ({ ...state, loading: true }),
    [Actions.LOAD_END]: state => ({ ...state, loading: false }),
    [Actions.ERROR]: (state, action) => ({ ...state, errors: action.payload }),
    [Actions.SUCCESS]: (state, action) => ({ ...state, success: action.payload }),
}, initialState);
