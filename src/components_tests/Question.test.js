import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../components/Question';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Question />);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Question />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a button', () => {
  const wrap = mount(<Question />)
  expect(wrap.find('button').text()).toEqual('YES')
});
