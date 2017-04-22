import React, { Component } from 'react';
import CampersList from './components/CampersList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>RP FCC Camper Leaderboard</h2>
          <p>Coded by <a href="https://ramiropinol.github.io/">Ramiro Piñol</a>. Repo on <a href="https://github.com/RamiroPinol/camper-leaderboard">Github</a></p>
        </header>
        <CampersList />
      </div>
    );
  }
}

export default App;
