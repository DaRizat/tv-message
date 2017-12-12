import React from 'react';
import { render } from 'react-dom';

import Home from './components/home';

require('./styles/index.scss');

const rootElement = document.getElementById('root');
render(<Home />, rootElement);
