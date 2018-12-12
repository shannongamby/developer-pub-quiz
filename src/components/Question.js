import React, { Component } from 'react';

class Question extends Component {

  incorrect() {
    alert('No, you numpty!')
  }

  correct() {
    alert("You're acing this!")
  }

  render() {
    return (
      <div className="App">
        <div>Is 1 greater than 2?</div>
        <button id='yes_button' onClick={this.incorrect}>YES</button>
        <button id='no_button' onClick={this.correct}>NO</button>
      </div>
    );
  }
}

export default Question;
