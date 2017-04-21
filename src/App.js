import React, { Component } from 'react';
import CampersList from './components/CampersList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>RP FCC Camper Leaderboard</h2>
        </header>
        <CampersList />
      </div>
    );
  }
}

export default App;
