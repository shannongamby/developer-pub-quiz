import React, { Component } from 'react';

class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }
  render() {
    return (
      <div>{this.state.text}</div>
    )
  }
}

export default Question;
