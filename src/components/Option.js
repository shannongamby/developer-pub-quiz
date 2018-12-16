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
        <div className="buttons" onClick={this.state.onAnswerSelected}><Button bsSize="large" bsClass="buttons">{this.state.text}</Button></div>
    );
  }
}

export default Option;
