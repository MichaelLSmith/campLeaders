import React, { Component } from 'react';
//import logo from './logo.svg';

import Nav from './Nav';
import Leaderboard from './leaderboard/Leaderboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
