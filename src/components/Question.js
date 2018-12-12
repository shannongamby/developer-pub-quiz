import React, { Component } from 'react';

class Question extends Component {

  constructor(props) {
  super(props);
  this.state = {
    numptyHidden: true,
    acingHidden: true
  };
}

  handleYes = event => {
    event.preventDefault();
    this.state.numptyHidden = false
    this.state.acingHidden = true
    document.getElementById('wrong_answer').style.display = 'block'
    document.getElementById('right_answer').style.display = 'none'

  }

  handleNo = event => {
    event.preventDefault();
    this.state.numptyHidden = true
    this.state.acingHidden = false
    document.getElementById('right_answer').style.display = 'block'
    document.getElementById('wrong_answer').style.display = 'none'

  }


  render() {
    const style = this.state.numptyHidden ? {display: 'none'} : {}
    const style_two = this.state.acingHidden ? {display: 'none'} : {}
    return (
      <div className="App">
        <div>Is 1 greater than 2?</div>
        <button id='yes_button' onClick={this.handleYes}>YES</button>
        <button id='no_button' onClick={this.handleNo}>NO</button>
        <div id="wrong_answer" style={ style } display='block'>No, you numpty!</div>
        <div id="right_answer" style={ style_two } display='block'>You're acing this!</div>
      </div>
    );
  }
}

export default Question;
