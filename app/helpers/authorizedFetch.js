import merge from 'deepmerge';
import { call, select } from 'redux-saga/effects';
import apiFetch from './fetch';
import tokenSelector from '../modules/common/selectors';

function* authorizedFetch(endpoint, options) {
    const token = yield select(tokenSelector);
    const authOption = { headers: { Auth: token } };
    const opts = merge(options || {}, authOption);
    yield call(apiFetch, endpoint, opts);
}

function* fetch(endpoint, options) {
    yield call(authorizedFetch, endpoint, options);
}

export default fetch;
