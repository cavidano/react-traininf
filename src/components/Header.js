import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {

    const logo = (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40">
            <g>
                <polygon points="87.5 0 80 7.5 80 2.5 77.5 0 67.5 0 65 2.5 65 7.5 60 12.5 55 7.5 55 2.5 52.5 0 42.5 0 40 2.5 37.5 0 27.5 0 25 2.5 25 12.5 12.501 0 2.501 0 0 2.5 0 37.5 2.501 40 12.501 40 15 37.5 15 27.5 27.5 40 37.5 40 40 37.5 40 17.5 52.5 30 52.5 37.5 55 40 65 40 67.5 37.5 67.5 30 80 17.5 80 32.5 87.5 40 112.5 40 120 32.5 120 25 117.5 22 105 22 105 25 95 25 95 15 105 15 105 18 117.5 18 120 15 120 7.5 112.5 0 87.5 0" />
                <path d="M117.9877,1.8787h.293l.4888.8088h.3522l-.53-.831a.4834.4834,0,0,0,.4927-.517c0-.3837-.2322-.5435-.6895-.5435h-.718V2.6875h.3105Zm0-.8182h.3758c.1867,0,.411.0278.411.2568,0,.2742-.2055.2962-.4385.2962h-.3483Z" />
                <path d="M118.3265,3.42A1.6573,1.6573,0,0,0,120,1.71a1.6784,1.6784,0,1,0-3.3563,0A1.6456,1.6456,0,0,0,118.3265,3.42Zm0-3.1218A1.3255,1.3255,0,0,1,119.6342,1.71a1.3157,1.3157,0,1,1-2.6242,0A1.3271,1.3271,0,0,1,118.3265.2977Z" />
            </g>
        </svg>
    );

    const navType = props.navType;
    const navBP = props.navBP;
    const search = props.search;

    const searchForm = (
        <form className="form-entry" role="search">

            <div className="form-entry__field">
            
                <label className="form-entry__field__label screen-reader-only" htmlFor="search-example">
                    Search
                </label>
                
                <span className="form-entry__field__input">
                    <input type="text" name="search-example" id="search-example" placeholder="Search" />
                    <button className="button button--icon-only" type="button" aria-label="Home">
                        <span className="icon_search" aria-hidden="true"></span>
                    </button>
                </span>
            
            </div>
        
        </form>
    );

    return (
        <header className="box-shadow-1 z-index-900" id="global-header">

            <a className="focusable-only" href="#skip-header-target">Skip Header</a>

            <div className={`primary-nav--${ navType }--${ navBP }`}>

                <div className="primary-nav__logo">
                    <a href="#1" title="Home" data-logo="brand">
                        { logo }
                    </a>
                </div>

                <nav className="primary-nav__menu" aria-label="navigation" id="primary-menu">

                    <ul>
                        <li>
                            <a href="#1">Link</a>
                        </li>
                        <li>
                            <a href="#1">Link</a>
                        </li>
                        <li>
                            <a href="#1">Link</a>
                        </li>
                    </ul>

                    { search && <Fragment>{ searchForm }</Fragment> }

                </nav>

                <div className="primary-nav__actions">

                    <button className="button button--icon-only mobile-menu-toggle" aria-label="Menu" data-toggle="collapse" data-target="#primary-menu">
                        <span className="icon_menu" aria-hidden="true"></span>
                    </button>
                    
                    <div className="button-group">                            
                        <button className="button button--icon-only" aria-label="Language" data-modal-open="global-language">
                            <span className="icon_language" aria-hidden="true"></span>
                        </button>
                    </div>
                
                </div>

            </div>

        </header>
    );
}

Header.defaultProps = {
    navType: "inline",
    navBP: "lg",
    search: false
}

Header.propTypes = {
    navType: PropTypes.string.isRequired,
    navBP: PropTypes.string.isRequired,
    search: PropTypes.bool
}

export default Header;