import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div className="App">
        <div>Is 1 greater than 2?</div>
        <button id='yes_button'>YES</button>
        <button id='no_button'>NO</button>
      </div>
    );
  }
}

export default Question;
