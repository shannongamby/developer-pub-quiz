import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
        <div onClick={this.state.onAnswerSelected}>
        <button id="answer" type="button" className="btn btn-primary btn-lg btn-block">{this.state.text}</button>
        </div>
    );
  }
}

export default Option;
