import React, { Component } from 'react';

import User from './User';

class Users extends Component {
    
    render() {
        return (
            <div className="container medium cool margin-y-4">
                { this.props.users.map(user => (
                    <User key={ user.id } user={ user } />
                )) }
            </div>
        )
    }
}

export default Users;