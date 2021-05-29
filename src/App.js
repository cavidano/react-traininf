import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import TitleBar from './components/TitleBar';
import Users from './components/Users/Users';

import axios from 'axios';

import './theme.css';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {

    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({
      users: res.data,
      loading: false
    });

  }

  render() {
    return (
      <div className="App">
        <Fragment>
          <Header navType="inline" navBP="md" search={false} />
          <TitleBar title="Github Users" />
          <Users loading={ this.state.loading } users={this.state.users} />
          <Navbar title="Johnnie" />
        </Fragment> 
      </div>
    );

  }

}

export default App;