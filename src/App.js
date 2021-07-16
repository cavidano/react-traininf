import React, { Component, Fragment } from 'react';

// Components

import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Users from './components/Users/Users';
import Alert from './components/Alert';

// Axios

import axios from 'axios';

// Theme CSS

import './theme.css';

//////////////////////////////////////////////
// App Component
//////////////////////////////////////////////

class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

  async componentDidMount() {

    // this.setState({ loading: true });

    // const res = await axios
    //   .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // this.setState({
    //   users: res.data,
    //   loading: false
    // });

  }

  searchUsers = async (text) => {

    this.setState({ loading: true });
    
    const res = await axios
      .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: res.data.items,
      loading: false
    });
  }

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  }

  setAlert = (message, type) => {
    this.setState({
      alert: {message, type}
    })
  }

  // lifecycle method

  render() {

    const {users, loading} = this.state;
    
    return (
      <div className="App">
        <Fragment>
          <Header navType="inline" navBP="md" search={false} />
          <Alert alert={this.state.alert} />
          <SearchBar
            title="Search Github Users"
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
          <Navbar linkTitle="Link" />
        </Fragment> 
      </div>
    );

  }

}

export default App;