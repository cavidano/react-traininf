import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import TitleBar from './components/TitleBar';
import Card from './components/Card';

import Button from './components/Button';

import './theme.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Fragment>
          <Header navType="inline" navBP="md" search={false} />
          <TitleBar title="Hello, Carl" />
          <Card />
          <Navbar title="Johnnie" />
          <Button />
        </Fragment> 
      </div>
    );

  }

}

export default App;