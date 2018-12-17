import React, { Component } from 'react';
import Question from '../components/Question'
import Option from '../components/Option'

class QuizTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quiz: props.data,
      currentIndex: 0,
      score: 0
    }
  }

  handleAnswerSelection(option) {

    return () => {
      let newScore = this.state.score + (option.isCorrect ? 1 : 0)
      let newIndex = this.state.currentIndex + 1
      let numberOfQuestions = this.state.quiz.length
      let hasReachedTheEnd = newIndex >= numberOfQuestions

      alert((option.isCorrect ? 'Nice!' : 'Wrong!') + ' Player 2 Score: ' + newScore)

      if(hasReachedTheEnd) {
        alert('You reached the end. Your Score: ' + newScore + '/' + numberOfQuestions)
        this.setState({ score: 0, currentIndex: 0 })
        this.props.handleQuizTwoSwitch()
        this.props.handleQuizTwoScore(newScore)
      } else {
        this.setState({ score: newScore, currentIndex: newIndex })
      }
    }
  }
  render(){
    let currentQuizTwo = this.state.quiz[this.state.currentIndex]

    return(
      <div><Question text={currentQuizTwo.question.text } />
      { currentQuizTwo.options.map(this.renderOption.bind(this)) }

      </div>
    );
  }

  renderOption(option, index) {
    return( <Option
      key={index}
      text={ option.text }
      onAnswerSelected={this.handleAnswerSelection(option).bind(this)}
      handleQuizTwoSwitch = {this.props.handleQuizTwoSwitch} />
  );
}

}

export default QuizTwo;
