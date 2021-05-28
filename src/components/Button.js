import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {

    static defaultProps = {
        title: 'Action',
        link_url: 'https://google.com'
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }
    
    render() {

        const { title, link_url } = this.props;

        return (
            <Fragment>
                <a className="button" href={ link_url }>
                   My ID is: { title }
                </a>
            </Fragment>
        )
    }
}

export default Button
