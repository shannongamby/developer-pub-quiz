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
      endScreenHidden: true,
      quizScore: 0,
      quizTwoScore: 0,
      playAgainHidden: true
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePlayAgain = this.handlePlayAgain.bind(this)
    this.handleQuizOneSwitch = this.handleQuizOneSwitch.bind(this)
    this.handleQuizTwoSwitch = this.handleQuizTwoSwitch.bind(this)
  }
  render(score){
    const style = this.state.playHidden ? {display: 'none'} : {};
    const style_one = this.state.quizHidden ? {display: 'none'} : {};
    const style_two = this.state.quizTwoHidden ? {display: 'none'} : {};
    const style_three = this.state.endScreenHidden ? {display: 'none'} : {};
    const style_four = this.state.playAgainHidden ? {display: 'none'} : {};
    return(
    <div>
      <div id='play_button' style ={style} onClick={this.handlePlay}>PLAY</div>

      <div id='quiz_one'style ={style_one}>
        PLAYER ONE
        <Quiz
        data={ quizData }
        handleQuizOneSwitch={this.handleQuizOneSwitch}
        handleQuizScore={this.handleQuizScore.bind(this)}
        />
      </div>

      <div id='quiz_two'style ={style_two} className="playerOne">PLAYER TWO
        <QuizTwo data={ quizData }
        handleQuizTwoSwitch={this.handleQuizTwoSwitch}
        handleQuizTwoScore={this.handleQuizTwoScore.bind(this)}/>
      </div>

      <div id='end_screen_1' style ={style_three}>
        {`Player 1 Score: ${this.state.QuizScore} `}
      </div>

      <div id='end_screen_2' style ={style_three}>
        {`Player 2 Score: ${this.state.QuizTwoScore}`}
      </div>
      <div id='play_again' style={style_four} onClick={this.handlePlayAgain}>
        Play Again
      </div>
      </div>

    );
  }

  handleQuizScore(score) {
    this.setState({QuizScore:score})
  }

  handleQuizTwoScore(score) {
    this.setState({QuizTwoScore:score})
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
    this.setState({quizTwoHidden:true, endScreenHidden:false, playAgainHidden:false})
  }

  handlePlayAgain() {
    this.setState({quizHidden:false, endScreenHidden:true, playAgainHidden:true})
  }
}
}

export default Game;
