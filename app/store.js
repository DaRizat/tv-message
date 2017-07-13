import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Reducers
import config from './modules/config';
import notifications from './modules/notifications';

export const history = createHistory();
const router = routerMiddleware(history);
const saga = createSagaMiddleware();
const logger = createLogger();

export const newStore = (initialState) => {
    const store = createStore(
    combineReducers({
        config: config.reducer,
        notifications: notifications.reducer,
        router: routerReducer
    }),
    initialState,
    applyMiddleware(router, saga, logger)
    );

    return store;
};
