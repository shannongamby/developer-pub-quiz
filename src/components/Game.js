import React, { Component } from 'react';
import Quiz from '../components/Quiz.js'
import quizData from '../quizquestions/data'

class Game extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div><Quiz data={ quizData } /></div>
    );
  }
}

export default Game;
