import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {

    
    static defaultProps = {
        title: "Header"
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
        this.setState({ text: '' })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        
        const {showClear, clearUsers} = this.props;

        return (


            <header className="theme-light padding-y-3">

                <div className="container narrow text-align-center">
                    <h1>{ this.props.title }</h1>

                    <div className="form-entry font-size-md">

                        <form className="form-entry__field" onSubmit={ this.onSubmit }>

                            <label className="form-entry__field__label screen-reader-only" htmlFor="search-example">
                                Search
                            </label>
                            
                            <span className="form-entry__field__input">
                                <input type="text" name="text" value={ this.state.text } onChange={ this.onChange } />
                                
                                { showClear && (
                                    <button className="button button--icon-only" onClick={ clearUsers } type="button">
                                        <span className="nyc_icon_close"></span>
                                    </button>
                                ) }        

                                <button className="button button--icon-only" type="submit" aria-label="Home">
                                    <span className="nyc_icon_search" aria-hidden="true"></span>
                                </button>
                                
                            </span>
                            
                        </form>

                    </div>
                </div>

                
            </header>
        );
    }
}

export default TitleBar;