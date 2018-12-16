import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user'
class App extends Component {
	state={}
  render() {
    return (
      <div className="App">
      <User user="hlilou" className="user2" /><User user="wassim" className="user2" />
     </div>
    );
  }
}

export default App;
