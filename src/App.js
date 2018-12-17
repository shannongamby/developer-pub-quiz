import React, { Component } from 'react';
import './App.css';
import Game from './components/Game.js'
import quizData from './quizquestions/data'
import { Button } from 'react-bootstrap';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    console.warn("result return here",this.state.place)
    return (
      <div className="App">
        <Game data={ quizData } />
      </div>
    )
  }
}

export default App;
