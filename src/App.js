import React, { Component } from 'react';
import './App.css';
import LeaderBoard from './components/leaderboard/LeaderBoard';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LeaderBoard />
      </div>
    );
  }
}

export default App;
