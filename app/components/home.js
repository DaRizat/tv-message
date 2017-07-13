import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { push } from 'react-router-redux';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(path) {
        this.props.dispatch(push(path));
    }

    render() { // eslint-disable-line class-methods-use-this
        return (
          <div>
            <div className="row">
              <h2>Welcome to the world of Microservices!</h2>
            </div>
          </div>
        );
    }
}
