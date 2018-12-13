import React, { Component } from 'react';
import Question from '../components/Question'
import Option from '../components/Option'

class Quiz extends Component {
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

      alert((option.isCorrect ? 'Nice!' : 'Wrong!') + ' Score: ' + newScore)

      if(hasReachedTheEnd) {
        alert('You reached the end. Your Score: ' + newScore + '/' + numberOfQuestions)
        this.setState({ score: 0, currentIndex: 0 })
      } else {
        this.setState({ score: newScore, currentIndex: newIndex })
      }
    }
  }

  render() {
    let currentQuiz = this.state.quiz[this.state.currentIndex]

    return (
        <div>
          <Question text={ currentQuiz.question.text } />
          { currentQuiz.options.map(this.renderOption.bind(this)) }
        </div>
    );
  }

  renderOption(option, index) {
      return (
          <Option key={index} text={ option.text } onAnswerSelected={this.handleAnswerSelection(option).bind(this)} />
      );
  }
}

export default Quiz;
