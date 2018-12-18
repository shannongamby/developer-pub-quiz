import React, { Component } from 'react';
import './App.css';
import Game from './components/Game.js'
import quizData from './quizquestions/data'
import Mapping from './components/Map.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    console.log(Mapping);
    return (

      <div className="App">
        <Game data={ quizData } />
        <Mapping />
      </div>

    )
  }
}

export default App;
