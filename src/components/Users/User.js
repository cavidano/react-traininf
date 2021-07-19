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
			company,
            avatar_url, 
            html_url, 
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

                <div className="container narrow padding-y-3">

					<div className="backdrop theme-dark border-radius--lg">

						<div className="backdrop__image gradient-veneer-bottom">
							<img src={avatar_url} alt={`${name} profile picture`} />
						</div>

						<div className="backdrop__cover justify-content-end border-bottom">

							<div className="container margin-y-3">
								<p className="badge text-color-secondary">
									{hireable ?
									<span class="badge__icon icon_checkbox-checked" aria-hidden="true"></span>
									:
									<span class="badge__icon icon_close" aria-hidden="true"></span>
									}
									<span className="badge__text">
										Hirable
									</span>
								</p>
							</div>

						</div>

					</div>
 
                 </div>

                <div className="container narrow padding-y-4">
                    {bio &&
					<Fragment>
						<h1 className="h2">About {name}</h1>
						<p>
							{company ?
							<strong>{company}</strong>
							:
							<strong>Independent</strong>
							}
						</p>
						<p>{bio}</p>
						<p><a href={html_url}>View Profile</a></p>
					</Fragment>
                    }
                </div>

            </article>
        )
    }
}

export default User;