import React, { Component } from 'react';
import './App.css';
import Game from './components/Game.js'
import quizData from './quizquestions/data'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div className="App">
        <Game data={ quizData } />
      </div>
    )
  }
}

export default App;
