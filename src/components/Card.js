import React, { Component } from 'react';

import Button from '../components/Button';

class Card extends Component {

    state = {
        date: new Date(),
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    };

    render() {

        // Destructuring?
        const { date, login, avatar_url, html_url } = this.state;

        return (
            <div className="container narrow margin-y-5">
                
                <div className="card border">

                    <div className="card__head border-bottom">
                        <p>{ date.toLocaleTimeString().toLowerCase() }</p>
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
                                <a className="button button--outline border-radius-pill" href={ html_url }>View Profile</a>
                            </li>
                        </ul>
                    </div>

                </div>
        
            </div>
        );
    }
}

export default Card