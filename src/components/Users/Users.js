import React, { Component } from 'react';
import User from './User';
import Spinner from '../Spinner/Spinner.js';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="container medium cool margin-y-4">
                { users.map(user => (
                    <User key={ user.id } user={ user } />
                )) }
            </div>
        )
    }
    
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users;