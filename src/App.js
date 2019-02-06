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
        <footer>
          <h3>Contributors</h3>
          <p>This API and documentation was built by a team of all female identifying developers.</p>
          <ul className="contributors">
            <li>Backend/API: Cole Vanacore <a href="https://github.com/colev1">@colev1</a></li>
            <li>Backend/API: Kaylee Bunce <a href="https://github.com/kayleenovak">@kayleenovak</a></li>
            <li>Frontend/Docs: Tanjie McMeans <a href="https://github.com/TMcMeans">@TMcMeans</a></li>
            <li>Frontend/Docs: Ashton Bailey <a href="https://github.com/ashtonkbailey">@ashtonkbailey</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
