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

it('has a yes button', () => {
  const wrap = mount(<Question />)
  expect(wrap.find('#yes_button').text()).toEqual('YES')
});

it('has a no button', () => {
  const wrap = mount(<Question />)
  expect(wrap.find('#no_button').text()).toEqual('NO')
});
