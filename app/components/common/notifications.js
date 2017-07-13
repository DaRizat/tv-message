import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Notifications extends Component {

    render() {
        return (
        <div>
            { this.props.errors.length > 0 &&
                <p className='alert alert-danger'>{this.props.errors.join(', ')}</p>
            }
            { this.props.success.length > 0 &&
                <p className='alert alert-success'>{this.props.success.join(', ')}</p>
            }
        </div>
        );
    }
}

Notifications.propTypes = {
    errors: PropTypes.array,
    success: PropTypes.array
};

const mapStateToProps = state => ({
    errors: state.notifications.errors,
    success: state.notifications.success
});

export default connect(mapStateToProps)(Notifications);
