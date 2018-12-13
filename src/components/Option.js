import React, { Component } from 'react';

class Option extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      onAnswerSelected: props.onAnswerSelected
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text: nextProps.text,
      onAnswerSelected: nextProps.onAnswerSelected
    });
  }

  render() {
    return (
        <div onClick={this.state.onAnswerSelected}>{this.state.text}</div>
    );
  }
}

export default Option;
