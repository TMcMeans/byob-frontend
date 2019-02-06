import React, { Component } from 'react';

import Documentation from './Documentation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Concerts</h1>
          <h3>The Concerts API</h3>
        </div>
        <Documentation />
        <footer>{/* NAME AND GITHUBS OF ERRBODY*/}</footer>
      </div>
    );
  }
}

export default App;
