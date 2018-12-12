import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import QuestionOne from './components/QuestionOne';

class App extends Component {
  render() {
    return (
      <div className="Question">
        < Question />
        < QuestionOne />
      </div>
    );
  }
}

export default App;
