import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    static defaultProps = {
        title: 'Clear Search',
        class_list: ''
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        class_list: PropTypes.string.isRequired
    }
    
    render() {
        const { title, link_url, class_list } = this.props;
        
        return (
            <Fragment>
                <button className={ class_list }>
                   { title }
                </button>
            </Fragment>
        )
    }
}

export default Button;