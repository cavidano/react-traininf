import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import TitleBar from './components/TitleBar';

import './theme.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Fragment>
          <Header navType="inline" navBP="md" search={false} />
          <TitleBar title="Hello, Carl" />
          <Navbar title="Johnnie" />
        </Fragment> 
      </div>
    );

  }

}

export default App;