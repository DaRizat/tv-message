/* global window, document */
import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, push } from 'react-router-redux';

import Home from './components/home';
import Header from './components/common/header';
import Loading from './components/common/loading';
import Notifications from './components/common/notifications';
import { newStore, history } from './store';

require('./styles/index.scss');

const rootElement = document.getElementById('root');
const store = newStore();
const baseRoute = 'react-ui-template';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Loading />
        <Notifications />
        <Route path={`/${baseRoute}`} component={Home} />
      </div>
    </ConnectedRouter>
  </Provider>,
  rootElement);
