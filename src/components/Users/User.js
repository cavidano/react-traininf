import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner.js';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';



class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    render() {

        const {
            name,
            avatar_url, 
            bio, 
            blog, 
            login, 
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const { loading } = this.props;

        if(loading) return <Spinner />;

        return (
            <div className="container narrow padding-y-4">
                <Link className="button" to="/">Back to Search</Link>
                <p>
                     {name}
                </p>
            </div>
        )
    }
}

export default User;
