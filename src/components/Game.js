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
    const play_button_style = this.state.playHidden ? {display: 'none'} : {};
    const quiz_one_style = this.state.quizHidden ? {display: 'none'} : {};
    const quiz_two_style = this.state.quizTwoHidden ? {display: 'none'} : {};
    const end_screen_style = this.state.endScreenHidden ? {display: 'none'} : {};
    const play_again_button_style = this.state.playAgainHidden ? {display: 'none'} : {};
    const map_style = this.state.mapHidden ? {display: 'none'} : {};
    const map_button_style = this.state.mapButtonHidden ? {display: 'none'} : {};
    const switch_player_button_style = this.state.switchPlayerHidden ? {display: 'none'} : {};

    return(
    <div>
      <div id='play_button' className="btn btn-lg btn-block" style={play_button_style} onClick={this.handlePlay}>
        <span role="img" aria-label="two_beers">🍻 </span>
        PLAY FOR PINTS
        <span role="img" aria-label="two_beers"> 🍻</span>
     </div>

      <div id='quiz_one'style={quiz_one_style}>
        PLAYER ONE
        <span role="img" aria-label="beer"> 🍺</span>
        <Quiz
        data={ quizData }
        handleQuizSwitch={this.handleQuizOneSwitch}
        handleQuizScore={this.handleQuizScore.bind(this)}
        />
      </div>

      <div id='switch_player' style={switch_player_button_style} onClick={this.handleSwitchPlayer} className="btn btn-lg btn-block">
        <span role="img" aria-label="two_beers">🍻 </span>
        SWITCH PLAYER
        <span role="img" aria-label="two_beers"> 🍻</span>
      </div>

      <div id='quiz_two'style={quiz_two_style}>
        PLAYER TWO
        <span role="img" aria-label="beer"> 🍺</span>
        <Quiz
        data={ quizData }
        handleQuizSwitch={this.handleQuizTwoSwitch}
        handleQuizScore={this.handleQuizTwoScore.bind(this)}
        />
      </div>

      <div id='end_screen_1' style={end_screen_style}>
        {`Player 1 Score: ${this.state.quizScore} `}
      </div>

      <div id='end_screen_2' style={end_screen_style}>
        {`Player 2 Score: ${this.state.quizTwoScore}`}
        {''}
      </div>

      <div id='play_again' style={play_again_button_style} className="btn btn-lg btn-block" onClick={this.handlePlayAgain}>
        Play Again <span role="img" aria-label="zany face">🤪</span>
      </div>

      <div id='map_button' className="btn btn-lg btn-block" style={map_button_style} onClick={this.handleMap}>
        PUBS NEAR ME
      </div>

        <div style={map_style}>
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
