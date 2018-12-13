import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Quiz from '../components/Quiz';

describe('<Quiz />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Quiz />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the first question', () => {

  });
});
