import React, { Component, Fragment } from 'react';

import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';

import './theme.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Fragment>
          <Header />
          <Navbar />
        </Fragment> 
      </div>
    );

  }

}