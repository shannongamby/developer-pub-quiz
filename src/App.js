import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question'

class App extends Component {
  render() {
    var incorrect = {
      answer: "No, you numpty!"
    }
    return (
      <div className="Question">
        < Question incorrect={incorrect} />
      </div>
    );
  }
}

export default App;
