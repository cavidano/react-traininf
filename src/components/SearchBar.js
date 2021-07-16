import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Button

import Button from './Button';

class SearchBar extends Component {
 
    static defaultProps = {
        title: "Header",
        showClear: false
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }

    state = {
        text: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        
        const {showClear, clearUsers} = this.props;

        return (

            <header className="theme-primary padding-y-4">

                <div className="container narrow text-align-center">
                    <h1 className="h2">{this.props.title}</h1>

                    <div className="form-entry font-size-md">

                        <form className="form-entry__field" onSubmit={this.onSubmit}>

                            <label className="form-entry__field__label screen-reader-only" htmlFor="search-example">
                                Search
                            </label>
                            
                            <span className="form-entry__field__input">
                                <input type="text" name="text" value={this.state.text} onChange={this.onChange} />
                                
                                { showClear && (
                                    <button className="button button--icon-only" onClick={clearUsers} type="button">
                                        <span className="icon_close"></span>
                                    </button>
                                ) }        

                                <button className="button button--icon-only" type="submit" aria-label="Home">
                                    <span className="icon_search" aria-hidden="true"></span>
                                </button>
                                
                            </span>
                            
                        </form>

                        <div className="container margin-y-3">
                            <Button class_list="button theme-white" />
                        </div>

                    </div>
                </div>
                
            </header>
        );
    }
}

export default SearchBar;