import React, { Component } from 'react';

import Documentation from './Documentation';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Concerts</h1>
          <h2>The Concerts API</h2>
          <Documentation />
          <footer>{/* NAME AND GITHUBS OF ERRBODY*/}</footer>
        </div>
      </div>
    );
  }
}

export default App;
