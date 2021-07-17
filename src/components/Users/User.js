import React, { Component, Fragment } from 'react';
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

                <div className="container medium padding-y-4">
                    <table class="table table--stack--md table--striped table--va-middle">

							<caption class="screen-reader-only">
								New York City Population Demographics
							</caption>

							<thead>
								<tr>
									<th scope="col">Followers</th>
									<th scope="col">Following</th>
									<th scope="col">Public Repos</th>
									<th scope="col">Hirable</th>
									<th scope="col">
										<span class="screen-reader-only">Action</span>
									</th>
								</tr>

							</thead>
							<tbody>

								<tr>
									<td>Brooklyn</td>
									<td>2,559,903</td>
									<td>70.82</td>
									<td>36,147</td>
									<td class="text-align-right">
										<a href="#1">View Map</a>
									</td>
								</tr>
								<tr>
									<td>Bronx</td>
									<td>1,418,207</td>
									<td>42.10</td>
									<td>33,867</td>
									<td class="text-align-right">
										<a href="#1">View Map</a>
									</td>
								</tr>
								<tr>
									<td>Manhattan</td>
									<td>1,628,706</td>
									<td>22.83</td>
									<td>71,341</td>
									<td class="text-align-right">
										<a href="#1">View Map</a>
									</td>
								</tr>
								<tr>
									<td>Queens</td>
									<td>2,253,858</td>
									<td>108.53</td>
									<td>20,767</td>
									<td class="text-align-right">
										<a href="#1">View Map</a>
									</td>
								</tr>

								<tr>
									<td>Staten Island</td>
									<td>476,143</td>
									<td>58.37</td>
									<td>8,157</td>
									<td class="text-align-right">
										<a href="#1">View Map</a>
									</td>
								</tr>
							</tbody>

						</table>

                </div>
            </article>
        )
    }
}

export default User;