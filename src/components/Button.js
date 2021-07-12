import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    static defaultProps = {
        title: 'Action',
        link_url: 'https://gobutton jhghjkogle.com',
        class_list: ''
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }
    
    render() {

        const { title, link_url, class_list } = this.props;

        return (
            <Fragment>
                <a className={ class_list } href={ link_url }>
                   My ID is: { title }
                </a>
            </Fragment>
        )
    }
}

export default Button;