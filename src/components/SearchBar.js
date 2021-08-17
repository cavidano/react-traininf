import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ title, searchUsers, showClear, clearUsers, setAlert }) => {
 
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === ''){
            setAlert('Please enter something', 'warn')
        } else {
            searchUsers(text);
            setText('');
        }
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <header className="theme-primary padding-y-4">

            <div className="container narrow text-align-center">
                <h1 className="h2">{title}</h1>

                <div className="form-entry font-size-md">

                    <form className="form-entry__field" onSubmit={onSubmit}>

                        <label className="form-entry__field__label screen-reader-only" htmlFor="search-example">
                            Search
                        </label>
                        
                        <span className="form-entry__field__input">
                            <input type="text" name="text" value={text} onChange={onChange} />
                            
<<<<<<< HEAD
                            { showClear && (
                                <button
                                    className="button button--icon-only"
                                    onClick={clearUsers}
                                    type="button">
                                        <span className="icon_close"></span>
=======
                            <span className="form-entry__field__input">
                                <input type="text" name="text" value={this.state.text} onChange={this.onChange} />
                                
                                { showClear && (
                                    <button
                                        className="button button--icon-only"
                                        onClick={clearUsers}
                                        type="button">
                                            <span className="icon_close"></span>
                                    </button>
                                ) }        

                                <button className="button button--icon-only" type="submit" aria-label="Home">
                                    <span className="icon_search" aria-hidden="true"></span>
>>>>>>> parent of 2463a0d (before DORIS presentation)
                                </button>
                            ) }        

                            <button className="button button--icon-only theme-white" type="submit" aria-label="Home">
                                <span className="icon_search" aria-hidden="true"></span>
                            </button>
                            
                        </span>
                        
                    </form>

<<<<<<< HEAD
=======
                        <div className="container margin-y-3">
                            <Button class_list="button theme-white" />
                        </div>

                    </div>
>>>>>>> parent of 2463a0d (before DORIS presentation)
                </div>
            </div>
            
        </header>
    );
}

SearchBar.defaultProps = {
    title: "Header"
}

SearchBar.propTypes = {
    title: PropTypes.string.isRequired,
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default SearchBar;