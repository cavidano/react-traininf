import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Alert from './components/Alert';

import About from './components/About';

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
    user: {},
    repos: [],
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

  // Search Users

  searchUsers = async (text) => {

    this.setState({ loading: true });
    
    const res = await axios
      .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: res.data.items,
      loading: false
    });
  }

  // Clear Users

  clearUsers = (e) => {
    e.preventDefault();
    this.setState({
      users: [],
      loading: false
    });
  }

  // Get a single user

  getUser = async (username) => {
    this.setState({ loading: true });
    
    const res = await axios
      .get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      user: res.data,
      loading: false
    });

  }

  // Get user repos

  getUserRepos = async (username) => {
    this.setState({ loading: true });
    
    const res = await axios
      .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      repos: res.data,
      loading: false
    });

  }

  setAlert = (message, type) => {
    this.setState({
      alert: {message, type}

    })
    
    setTimeout(() => this.setState({alert: null}), 5000);
  }

  // lifecycle method

  render() {

    const { users, user, loading, repos } = this.state;
    
    return (
      <Router>
        <div className="App" style={{ minHeight: '100vh'}}>
          <Fragment>
            <Header navType="inline" navBP="md" search={false} />
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/" render={ (props) =>(
                <Fragment>
                  <SearchBar
                    title="Search Github Users"
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render={props => (
                <User 
                  { ...props} 
                  getUser={this.getUser} 
                  getUserRepos={this.getUserRepos} 
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )} />

            </Switch>
            
            <Navbar linkTitle="Link" />
            
          </Fragment> 
        </div>
      </Router>
    );

  }

}



export default App;