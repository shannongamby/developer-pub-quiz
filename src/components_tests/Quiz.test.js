import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from '../components/Quiz';
import { shallow, mount, render } from 'enzyme';

let testData = [
  {
    question: {
      text: "Question 1",
    },
    options: [
      {
        text: "Question 1 - Option 1",
        isCorrent: true
      },
      {
        text: "Question 1 - Option 2",
        isCorrent: false
      },
      {
        text: "Question 1 - Option 3",
        isCorrent: false
      }
    ]
  },{
    question: {
      text: "Question 2",
    },
    options: [
      {
        text: "Question 2 - Option 1",
        isCorrent: false
      },
      {
        text: "Question 2 - Option 2",
        isCorrent: true
      }
    ]
  }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quiz data={testData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the first question', () => {
  const wrap = shallow(<Quiz data={testData} />)

  expect(wrap.find('Question').prop('text')).toEqual('Question 1')

  expect(wrap.find('Option').length).toEqual(3);
  expect(wrap.find('Option').at(0).prop('text')).toEqual('Question 1 - Option 1')
  expect(wrap.find('Option').at(1).prop('text')).toEqual('Question 1 - Option 2')
  expect(wrap.find('Option').at(2).prop('text')).toEqual('Question 1 - Option 3')
});

it('display correct message for correct answer', () => {
  var receivedMessage = ""
  window.alert = (message) => {
    receivedMessage = message // capture the alert message
  }

  const wrap = shallow(<Quiz data={testData} />)

  let correctOptionIndex = 0
  wrap.find('Option').at(correctOptionIndex).prop('onAnswerSelected')()

  expect(receivedMessage).toEqual('Nice! Score: 1')
});

it('display wrong message for wrong answer', () => {
  var receivedMessage = ""
  window.alert = (message) => {
    receivedMessage = message // capture the alert message
  }

  const wrap = shallow(<Quiz data={testData} />)

  let wrongOptionIndex = 1
  wrap.find('Option').at(wrongOptionIndex).prop('onAnswerSelected')()

  expect(receivedMessage).toEqual('Wrong! Score: 0')
});

it('renders the second question after replying to the first question', () => {
  window.alert = jest.fn(); // ignore alerts since we're not running the tests in a real browser

  const wrap = shallow(<Quiz data={testData} />)

  wrap.find('Option').at(0).prop('onAnswerSelected')()

  expect(wrap.find('Question').prop('text')).toEqual('Question 2')
  expect(wrap.find('Option').length).toEqual(2);
  expect(wrap.find('Option').at(0).prop('text')).toEqual('Question 2 - Option 1')
  expect(wrap.find('Option').at(1).prop('text')).toEqual('Question 2 - Option 2')
});
