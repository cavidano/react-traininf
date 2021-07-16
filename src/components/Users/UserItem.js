import React from 'react';

import Button from '../Button';
import { Link } from 'react-router-dom';

const UserItem = (props) => {

    // Destructuring?
    const { id, login, avatar_url, html_url } = props.user;

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
                        <Button />
                    </li>
                    <li>
                        <Link className="button button--outline border-radius-pill" to={`/user/${login}`}>View Profile</Link>
                    </li>
                </ul>
            </div>

        </div>
    
    );
    
}

export default UserItem;