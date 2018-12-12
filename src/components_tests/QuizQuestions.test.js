import React from 'react';
import ReactDOM from 'react-dom';
import QuizQuestions from '../quizquestions/QuizQuestions';
import { shallow, mount, render } from 'enzyme';

describe('<QuizQuestions />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QuizQuestions />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
