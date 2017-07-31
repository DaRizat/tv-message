import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = props => {

    // Use the location prop to change your header title
    const pageTitle = () => {
        const title = 'Microservices';
        return title;
    };

    return (
        <div className="header">
            <img className="logo" src='https://s3.amazonaws.com/gw-deploy/ttd-advertiser-selector/assets/images/goodway.png' />
            <p className="brand">{ pageTitle() }</p>
        </div>
    );
}

Header.propTypes = {
    location: PropTypes.string.isRequired
};

export default connect(state => ({ location: state.router.location.pathname }))(Header);
