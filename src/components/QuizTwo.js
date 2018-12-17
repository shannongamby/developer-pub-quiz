import React, { Component } from 'react';
import Question from '../components/Question'
import Option from '../components/Option'

class QuizTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quiz: props.data,
      currentIndex: 0,
      score: 0,
      length: 4,
      count: 0
    }
  }

  handleAnswerSelection(option) {

    return () => {
      this.setState({count: this.state.count + 1})
      let newScore = this.state.score + (option.isCorrect ? 1 : 0)
      let newIndex = Math.round((Math.random() * 6))
      let numberOfQuestions = this.state.length
      let hasReachedTheEnd = this.state.count >= numberOfQuestions

      if(hasReachedTheEnd) {
        this.props.handleQuizTwoScore(newScore)
        this.setState({ score: 0, currentIndex: 0, count: 0 })
        this.props.handleQuizTwoSwitch()
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
