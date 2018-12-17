import React, { Component } from 'react';
import Quiz from '../components/Quiz.js'
import QuizTwo from '../components/QuizTwo.js'
import quizData from '../quizquestions/data'

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      quizHidden: true,
      quizTwoHidden: true,
      playHidden: false,
      endScreenHidden: false
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handleQuizOneSwitch = this.handleQuizOneSwitch.bind(this)
    this.handleQuizTwoSwitch = this.handleQuizTwoSwitch.bind(this)
  }
  render(){
    const style = this.state.playHidden ? {display: 'none'} : {};
    const style_one = this.state.quizHidden ? {display: 'none'} : {};
    const style_two = this.state.quizTwoHidden ? {display: 'none'} : {};
    return(
      <div>
      <div id='play_button' style ={style} onClick={this.handlePlay}>Play</div>
      <div id='quiz_one'style ={style_one}>
      PLAYER ONE
      <Quiz
      data={ quizData }
      handleQuizOneSwitch={this.handleQuizOneSwitch}
      handleQuizTwoSwitch={this.handleQuizTwoSwitch}
      />
      </div>

      <div id='quiz_two'style ={style_two}>PLAYER TWO
      <QuizTwo
      data={ quizData }
      handleQuizOneSwitch={this.handleQuizOneSwitch}
      handleQuizTwoSwitch={this.handleQuizTwoSwitch}/></div>
      </div>
    );
  }

  handlePlay(){
    this.setState({quizHidden:false})
    this.setState({playHidden:true})
    this.setState({quizTwoHidden:true})
  }

  handleQuizOneSwitch() {
    this.setState({quizHidden:true, quizTwoHidden:false})
  }

  handleQuizTwoSwitch() {
      {this.setState({quizTwoHidden:true, endScreenHidden: false})
    }
  }
}

export default Game;
