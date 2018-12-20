import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from '../components/Quiz';
import Game from '../components/Game';
import quizdata from '../quizquestions/data'
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

it('renders the second question after replying to the first question', () => {

  const wrap = shallow(<Quiz data={testData} random={function(){ return 1;}} />)

  wrap.find('Option').at(0).prop('onAnswerSelected')()

  expect(wrap.find('Question').prop('text')).toEqual('Question 2')
  expect(wrap.find('Option').length).toEqual(2);
  expect(wrap.find('Option').at(0).prop('text')).toEqual('Question 2 - Option 1')
  expect(wrap.find('Option').at(1).prop('text')).toEqual('Question 2 - Option 2')
});
