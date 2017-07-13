/* global window, document */
import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, push } from 'react-router-redux';
import queryString from 'query-string';

import Home from './components/home';
import Header from './components/common/header';
import Loading from './components/common/loading';
import Notifications from './components/common/notifications';
import { newStore, history } from './store';

require('./styles/index.scss');

const query = queryString.parse(window.location.search);
const rootElement = document.getElementById('root');
const hostName = window.location.host;

let env = '';
let match = hostName.match(/ui\.goodwaygroup\.com/);

if(match) {
    env = 'production';
} else {
    match = hostName.match(/(development|staging)/);
    if(match) {
        env = match[0];
    } else {
        env = query.env || "development";
    }
}

let serviceHost = '';

switch (env) {
case 'production':
    serviceHost = 'services.goodwaygroup.com';
    break;
case 'staging':
    serviceHost = 'services.staging.goodwaygroup.com';
    break;
default:
    serviceHost = 'services.development.goodwaygroup.com';
}

const pixelId = window.location.pathname.split('/')[2];
const jobId = query.jobId;
const advertiserId = query.advertiserId;
const store = newStore({ config: { env, serviceHost, pixelId, jobId, advertiserId } });
const baseRoute = '/pixels';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Loading />
        <Notifications />
        <Route exact path="/" component={Home} />
      </div>
    </ConnectedRouter>
  </Provider>,
  rootElement);
