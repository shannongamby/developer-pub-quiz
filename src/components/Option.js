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

  method() {
    this.props.onAnswerSelected()
    this.props.handleQuizOneSwitch()
    this.props.handleQuizTwoSwitch()
  }


  render() {
    return (
        <div onClick={this.props.onAnswerSelected}>{this.state.text}</div>
    );
  }
}

export default Option;
