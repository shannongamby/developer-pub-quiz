import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
import QuestionOne from '../components/QuestionOne';
import { shallow, mount, render } from 'enzyme';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders <QuestionOne />', () => {
    const wrapper = shallow(<QuestionOne />);
    expect(wrapper.text()).toEqual('Render the question');
  });
});
