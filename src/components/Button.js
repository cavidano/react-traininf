import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {

    static defaultProps = {
        title: "Action"
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }
    
    render() {
        return (
            <Fragment>
                <a class="button" href="#1">
                    { this.props.title }

                </a>
                
            </Fragment>
        )
    }
}

export default Button
