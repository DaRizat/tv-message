import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Notifications = ({ errors, success }) => (
        <div>
            { errors.length > 0 &&
                <p className='alert alert-danger'>{errors.join(', ')}</p>
            }
            { success.length > 0 &&
                <p className='alert alert-success'>{success.join(', ')}</p>
            }
        </div>
    );

Notifications.propTypes = {
    errors: PropTypes.array,
    success: PropTypes.array
};

const mapStateToProps = state => ({
    errors: state.notifications.errors,
    success: state.notifications.success
});

export default connect(mapStateToProps)(Notifications);
