import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/';
import RepoSearch from './RepoSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RepoSearch store={store}/>
      </div>
    );
  }
}

export default App;
