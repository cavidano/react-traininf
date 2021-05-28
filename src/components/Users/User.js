import React, { Component } from 'react';

import Button from '../Button';

class User extends Component {

    render() {

        // Destructuring?
        const { id, login, avatar_url, html_url } = this.props.user;

        return (

            <div className="card border">

                <div className="card__head">
                    <p>{ id }</p>
                </div>

                <img src={ avatar_url } alt="Placeholder" />

                <div className="card__body">
                    <h2 className="h4">{ login }</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa obcaecati autem,
                        ex facilis labore reiciendis.
                    </p>
                </div>

                <div className="card__foot border-top font-size-sm">
                    <ul className="nav nav--horizontal justify-content-between">
                        <li>
                            <Button title={id} />
                        </li>
                        <li>
                            <a className="button button--outline border-radius-pill" href={ html_url }>View Profile</a>
                        </li>
                    </ul>
                </div>

            </div>
        
        );
    }
}

export default User;