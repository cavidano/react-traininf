import React, { Component } from 'react';

import User from './User';

class Users extends Component {

    state = {
        users: [
            {
                id: 1,
                login: "mojombo",
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo"
            },
            {
                id: 2,
                login: "defunkt",
                avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                html_url: "https://github.com/defunkt"
            },
            {
                id: 3,
                login: "pjhyett",
                avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
                html_url: "https://github.com/pjhyett"
            }
        ]
    }
    
    render() {
        return (
            <div className="container medium cool margin-y-4">
                { this.state.users.map(user => (
                    <User key={ user.id } user={ user } />
                )) }
            </div>
        )
    }
}

export default Users;