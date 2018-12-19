import React, { Component } from 'react';
import Quiz from '../components/Quiz.js'
import quizData from '../quizquestions/data'
import Mapping from '../components/Map.js'

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
      playAgainHidden: true,
      mapHidden: true,
      mapButtonHidden: false,
      switchPlayerHidden: true
    }
    this.handleMap = this.handleMap.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
    this.handleSwitchPlayer = this.handleSwitchPlayer.bind(this)
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
    const style_five = this.state.mapHidden ? {display: 'none'} : {};
    const style_six = this.state.mapButtonHidden ? {display: 'none'} : {};
    const style_seven = this.state.switchPlayerHidden ? {display: 'none'} : {};

    return(
    <div>
      <div id='play_button' className="btn btn-lg btn-block" style ={style} onClick={this.handlePlay}>
      <span role="img" aria-label="two_beers">🍻 </span>
      PLAY FOR PINTS
      <span role="img" aria-label="two_beers"> 🍻</span>
     </div>

      <div id='quiz_one'style ={style_one}>
        PLAYER ONE
        <span role="img" aria-label="beer"> 🍺</span>
        <Quiz
        data={ quizData }
        handleQuizSwitch={this.handleQuizOneSwitch}
        handleQuizScore={this.handleQuizScore.bind(this)}
        />
      </div>
      <div id='switch_player' style={style_seven} onClick={this.handleSwitchPlayer} className="btn btn-lg btn-block">
        SWITCH PLAYER
      </div>
      <div id='quiz_two'style ={style_two}>
        PLAYER TWO
        <span role="img" aria-label="beer"> 🍺</span>
        <Quiz
        data={ quizData }
        handleQuizSwitch={this.handleQuizTwoSwitch}
        handleQuizScore={this.handleQuizTwoScore.bind(this)}/>
      </div>

      <div id='end_screen_1' style ={style_three}>
        {`Player 1 Score: ${this.state.quizScore} `}
      </div>

      <div id='end_screen_2' style ={style_three}>
        {`Player 2 Score: ${this.state.quizTwoScore}`}
        {''}
      </div>
      <div id='play_again' style={style_four} className="btn btn-lg btn-block" onClick={this.handlePlayAgain}>
        Play Again <span role="img" aria-label="zany face">🤪</span>
      </div>

      <div id='map_button' className="btn btn-lg btn-block" style={style_six} onClick={this.handleMap}>
        PUBS NEAR ME
      </div>
        <div style={style_five}>
          <Mapping />
        </div>
      </div>

    );
  }

  handleQuizScore(score) {
    this.setState({quizScore:score})
  }

  handleQuizTwoScore(score) {
    this.setState({quizTwoScore:score})
  }

  handlePlay() {
    this.setState({quizHidden:false})
    this.setState({playHidden:true})
    this.setState({quizTwoHidden:true})
    this.setState({mapHidden:true})
    this.setState({mapButtonHidden:true})
  }

  handleQuizOneSwitch() {
    this.setState({quizHidden:true, switchPlayerHidden:false})
  }

  handleSwitchPlayer() {
    this.setState({quizTwoHidden:false, switchPlayerHidden:true})
  }

  handleQuizTwoSwitch() {
    this.setState({quizTwoHidden:true, endScreenHidden:false, playAgainHidden:false, mapButtonHidden:false})
  }

  handlePlayAgain() {
    this.setState({quizHidden:false, endScreenHidden:true, playAgainHidden:true, mapHidden:true, mapButtonHidden:true})
  }

  handleMap() {
    this.state.mapHidden === true ? this.setState({mapHidden:false}) : this.setState({mapHidden:true})
  }
}

export default Game;
