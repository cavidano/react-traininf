import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components

import Spinner from '../Spinner/Spinner.js';

//////////////////////////////////////////////
// Component
//////////////////////////////////////////////

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
            <article>
			
                <div className="container narrow padding-y-4">
                    <Link className="button button--has-icon font-size-md" to="/">                    
                        <span className="icon_chevron-left button__icon"></span>
                        <span className="button__text">Back to Search</span>
                    </Link>
                </div>

                <div className="container narrow padding-y-4">
                    <img className="width-100 border-radius" src={avatar_url} alt={`${name} profile picture`} />
                </div>

                <div className="container narrow padding-y-4">
                    {
                        bio &&
                        <Fragment>
                            <h1 className="h2">About {name}</h1>
                            <p>{bio}</p>

                            <div className="cool">
                            </div>
                        </Fragment>
                    }
                </div>

            </article>
        )
    }
}

export default User;