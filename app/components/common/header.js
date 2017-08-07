import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPageTitle } from '../../helpers';

const Header = ({ location, loggedIn, loginUrl, logoutUrl }) => (
        <div className="header">
            <img className="logo" src='https://s3.amazonaws.com/gw-deploy/ttd-advertiser-selector/assets/images/goodway.png' />
            <p className="brand">{ getPageTitle(location) }</p>
            { !loggedIn &&
                <a href={ loginUrl } className="pull-right">Login</a>
            } { loggedIn &&
                <a href={ logoutUrl } className="pull-right">Logout</a>
            }
        </div>
    );

Header.propTypes = {
    location: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    location: state.router.location.pathname,
    loggedIn: state.auth.loggedIn,
    loginUrl: state.config.loginUrl,
    logoutUrl: state.config.logoutUrl
});

export default connect(mapStateToProps)(Header);
