import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {

    const logo = (
        <svg xmlns="http://www.w3.org/2000/svg" width="132" height="36" viewBox="0 0 132 36">
            <path d="M17.9682,0a17.99,17.99,0,0,0-4.4563,35.4212h0A17.9919,17.9919,0,1,0,17.9682,0ZM13.9507,32.0041c-.0057-1.4042-.012-3.0141-.012-3.3133l-.4852.086a6.0448,6.0448,0,0,1-1.1707.0757,8.7122,8.7122,0,0,1-1.466-.1514,3.2363,3.2363,0,0,1-1.4132-.6482,2.7416,2.7416,0,0,1-.928-1.33l-.211-.4975A5.4247,5.4247,0,0,0,7.6,25.1232a2.565,2.565,0,0,0-.9176-.8216l-.1476-.1083a1.5592,1.5592,0,0,1-.2742-.26,1.1846,1.1846,0,0,1-.19-.3027q-.0633-.1515.1054-.249a1.3381,1.3381,0,0,1,.6118-.0966L7.21,23.35a3.0476,3.0476,0,0,1,1.0441.5188,3.458,3.458,0,0,1,1.023,1.1241,3.7809,3.7809,0,0,0,1.1707,1.3516,2.4421,2.4421,0,0,0,1.3815.4647,5.8587,5.8587,0,0,0,1.2024-.1077,4.1331,4.1331,0,0,0,.9491-.3245,3.5381,3.5381,0,0,1,1.0334-2.2273,14.1555,14.1555,0,0,1-2.162-.3893,8.498,8.498,0,0,1-1.9826-.8437,5.7133,5.7133,0,0,1-1.6982-1.4485,7.0281,7.0281,0,0,1-1.1072-2.27,11.05,11.05,0,0,1-.4323-3.2434A6.3957,6.3957,0,0,1,9.2985,11.5,5.9473,5.9473,0,0,1,9.446,7.0891a2.8911,2.8911,0,0,1,1.8141.2918,12.5322,12.5322,0,0,1,1.7613.8326q.5592.3454.8965.5837a14.8754,14.8754,0,0,1,8.1,0l.8015-.5187a11.2384,11.2384,0,0,1,1.94-.9516,2.7026,2.7026,0,0,1,1.709-.2376A5.8888,5.8888,0,0,1,26.6375,11.5a6.3966,6.3966,0,0,1,1.6667,4.4544,11.1756,11.1756,0,0,1-.4324,3.254,6.7566,6.7566,0,0,1-1.1174,2.27,5.93,5.93,0,0,1-1.709,1.4378,8.5116,8.5116,0,0,1-1.983.8434,14.1108,14.1108,0,0,1-2.1619.39,3.9045,3.9045,0,0,1,1.0965,3.07v4.7813a14.306,14.306,0,0,1-8.0463.0029Z"/>
            <g>
                <path d="M55.64,20.3243H46.1131V30.323H42V6.6525H57.0379V9.9689H46.1131v7.0394H55.64Z"/>
                <path d="M59.7223,8.1481a2.1212,2.1212,0,0,1,.5769-1.5232,2.17,2.17,0,0,1,1.65-.6065,2.1965,2.1965,0,0,1,1.6582.6065,2.1046,2.1046,0,0,1,.5853,1.5232,2.056,2.056,0,0,1-.5853,1.4991,2.2132,2.2132,0,0,1-1.6582.5981,2.1863,2.1863,0,0,1-1.65-.5981A2.0719,2.0719,0,0,1,59.7223,8.1481ZM63.9167,30.323h-3.95v-17.59h3.95Z"/>
                <path d="M71.6832,12.7327l.1138,2.0321a6.3239,6.3239,0,0,1,5.1206-2.3573q5.495,0,5.5924,6.2916V30.323H78.5591V18.9272a3.6225,3.6225,0,0,0-.7232-2.48,3.0427,3.0427,0,0,0-2.3647-.8045,3.8058,3.8058,0,0,0-3.56,2.1622V30.323H67.96v-17.59Z"/>
                <path d="M85.6314,21.3983a10.4508,10.4508,0,0,1,1.8859-6.5276,6.0392,6.0392,0,0,1,5.0555-2.4632,5.7415,5.7415,0,0,1,4.5195,1.9509V5.3519h3.951V30.323H97.4667l-.1951-1.8208A5.8258,5.8258,0,0,1,92.54,30.6481a6.0119,6.0119,0,0,1-4.9994-2.4868A10.8458,10.8458,0,0,1,85.6314,21.3983Zm3.95.3409a7.32,7.32,0,0,0,1.0325,4.1864,3.35,3.35,0,0,0,2.9342,1.5036,3.73,3.73,0,0,0,3.5441-2.1627v-7.51a3.6743,3.6743,0,0,0-3.5116-2.1134,3.3752,3.3752,0,0,0-2.9588,1.52A8.1567,8.1567,0,0,0,89.5815,21.7392Z"/>
                <path d="M112.6529,30.6481a8.1731,8.1731,0,0,1-6.0881-2.3657,8.58,8.58,0,0,1-2.3321-6.2989v-.4887a10.5432,10.5432,0,0,1,1.0158-4.7057,7.7261,7.7261,0,0,1,2.8524-3.2273,7.5429,7.5429,0,0,1,4.0968-1.1543A6.904,6.904,0,0,1,117.75,14.7a9.69,9.69,0,0,1,1.96,6.4866V22.78H108.2152a5.28,5.28,0,0,0,1.4553,3.4466,4.3668,4.3668,0,0,0,3.211,1.268,5.3539,5.3539,0,0,0,4.422-2.1942l2.1292,2.0316a7.1051,7.1051,0,0,1-2.8209,2.4465A8.8208,8.8208,0,0,1,112.6529,30.6481Zm-.471-15.07a3.3276,3.3276,0,0,0-2.6257,1.138,5.9021,5.9021,0,0,0-1.276,3.17h7.5276v-.2926a4.8069,4.8069,0,0,0-1.0572-2.9992A3.3015,3.3015,0,0,0,112.1819,15.5777Z"/>
                <path d="M131.9842,16.3418a9.7818,9.7818,0,0,0-1.61-.13,3.6222,3.6222,0,0,0-3.6574,2.0809v12.03h-3.951v-17.59h3.7717l.0975,1.9671a4.4511,4.4511,0,0,1,3.9668-2.2923A3.6988,3.6988,0,0,1,132,12.6351Z"/>
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
                    <a href="/" title="Home" data-logo="brand">
                        { logo }
                    </a>
                </div>

                <nav className="primary-nav__menu" aria-label="navigation" id="primary-menu">

                    <ul>
                        <li>
                            <NavLink exact to="/">Search</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about">About</NavLink>
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
    navType: "below",
    navBP: "lg",
    search: false
}

Header.propTypes = {
    navType: PropTypes.string.isRequired,
    navBP: PropTypes.string.isRequired,
    search: PropTypes.bool
}

export default Header;