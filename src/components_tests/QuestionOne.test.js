import React from 'react';
import ReactDOM from 'react-dom';
import QuestionOne from '../components/QuestionOne';
import { shallow, mount, render } from 'enzyme';

describe('<QuestionOne />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QuestionOne />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
