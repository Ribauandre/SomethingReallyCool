import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JorgesShoes from './7P9EhkL.gif'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Currently showing jorge something cool?</h1>
          <h2> lets see </h2>
        </header>
        <div>
        <p> this is  jorges shoes he like soooo much</p>
        <img src={JorgesShoes} alt="jorges shoes" width="500" height="600" />
        </div>
      </div>
    );
  }
}

export default App;
