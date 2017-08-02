import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPageTitle } from '../../helpers';

const Header = ({ location }) => (
        <div className="header">
            <img className="logo" src='https://s3.amazonaws.com/gw-deploy/ttd-advertiser-selector/assets/images/goodway.png' />
            <p className="brand">{ getPageTitle(location) }</p>
        </div>
    );

Header.propTypes = {
    location: PropTypes.string.isRequired
};

export default connect(state => ({ location: state.router.location.pathname }))(Header);
