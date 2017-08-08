import 'babel-polyfill';
import 'whatwg-fetch';

import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import buildAction from '../../helpers/buildAction';
import { helloWorldEndpoint, engineersOnlyEndpoint } from './selectors';
import tokenSelector from '../common/selectors';
import Actions from './actions';
import NOTIFICATIONS from '../notifications/actions';

export function* helloWorld(action) { // eslint-disable-line no-unused-vars
    try {
        yield put(buildAction(NOTIFICATIONS.LOAD_START));
        const token = yield select(tokenSelector);
        // const endpoint = `https://v78vk8t31g.execute-api.us-east-1.amazonaws.com/staging/helloworld`;
        const endpoint = yield select(helloWorldEndpoint);
        const response = yield call(fetch, `${endpoint}?id=react-ui-template`, {
            method: 'post',
            headers: {
                Auth: token || '',
                'content-type': 'application/json'
            }
        });
        const result = yield response.json();
        if (response.ok) {
            yield put(buildAction(NOTIFICATIONS.SUCCESS, [result.body]));
            yield put(buildAction(NOTIFICATIONS.LOAD_END));
        } else {
            yield put(buildAction(NOTIFICATIONS.ERROR, [result.message]));
            yield put(buildAction(NOTIFICATIONS.LOAD_END));
        }
    } catch (e) {
        yield put(buildAction(NOTIFICATIONS.ERROR, [e]));
        yield put(buildAction(NOTIFICATIONS.LOAD_END));
    }
}

export function* engineersOnly(action) { // eslint-disable-line no-unused-vars
    try {
        yield put(buildAction(NOTIFICATIONS.LOAD_START));
        const token = yield select(tokenSelector);
        const endpoint = yield select(engineersOnlyEndpoint);
        const response = yield call(fetch, endpoint, {
            method: 'get',
            headers: {
                Auth: token || '',
                'content-type': 'application/json'
            }
        });
        const result = yield response.json();
        if (response.ok) {
            yield put(buildAction(NOTIFICATIONS.SUCCESS, [result.body]));
            yield put(buildAction(NOTIFICATIONS.LOAD_END));
        } else {
            yield put(buildAction(NOTIFICATIONS.ERROR, [result.message]));
            yield put(buildAction(NOTIFICATIONS.LOAD_END));
        }
    } catch (e) {
        yield put(buildAction(NOTIFICATIONS.ERROR, [e]));
        yield put(buildAction(NOTIFICATIONS.LOAD_END));
    }
}

export default function* authSagas() {
    yield [
        takeEvery(Actions.HELLO_WORLD, helloWorld),
        takeEvery(Actions.ENGINEERS_ONLY, engineersOnly)
    ];
}
