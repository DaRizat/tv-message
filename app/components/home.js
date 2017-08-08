import React from 'react';
import { connect } from 'react-redux';
import buildAction from '../helpers/buildAction';
import AUTH from '../modules/auth/actions';

const Home = ({ dispatch }) => (
    <div>
      <div className="row">
        <h2>Welcome to the world of Microservices!</h2>
        <button
          className="btn btn-ptimary btn-lg"
          onClick={() => { dispatch(buildAction(AUTH.HELLO_WORLD)); }}>
          Are You Authorized?
        </button>
        <button
          className="btn btn-ptimary btn-lg"
          onClick={() => { dispatch(buildAction(AUTH.ENGINEERS_ONLY)); }}>
          Engineers Only
        </button>
      </div>
    </div>
);

export default connect()(Home);
