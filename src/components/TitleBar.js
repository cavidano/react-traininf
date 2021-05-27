import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {
    
    static defaultProps = {
        title: "Header"
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <header className="theme-primary padding-y-3">
                <div className="container narrow text-align-center">
                  <h1>{ this.props.title }</h1>  
                </div>
                
            </header>
        );
    }
}

export default TitleBar;
