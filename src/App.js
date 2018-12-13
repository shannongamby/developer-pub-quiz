import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js'
import quizData from './quizquestions/data'

class App extends Component {
  render() {
    return (
      <div>
        <Quiz data={ quizData } />
      </div>
    );
  }
}

export default App;
