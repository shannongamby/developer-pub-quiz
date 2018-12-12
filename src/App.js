import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz'
import quizData from './quiz_question/data'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <Quiz data={ quizData } />
        </div>
    );
  }
}

export default App;
