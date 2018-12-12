import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../components/Question';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Question />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the text', () => {
  const wrap = shallow(<Question text="My custom text" />)
  expect(wrap.find('div').text()).toEqual('My custom text')
});

it('rerender with new props', () => {
  const wrap = shallow(<Question text="My custom text" />)

  wrap.setProps({ text: "Another custom text" })

  expect(wrap.find('div').text()).toEqual('Another custom text')
});
