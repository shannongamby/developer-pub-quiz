import React from 'react';
import ReactDOM from 'react-dom';
import Option from '../components/Option';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Option />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the text', () => {
  const wrap = shallow(<Option text="My custom text" />)
  expect(wrap.find('div').text()).toEqual('My custom text')
});

it('invokes callback on click', () => {
  var onAnswerSelectedWasInvoked = false

  const wrap = shallow(<Option onAnswerSelected={() =>
    onAnswerSelectedWasInvoked = true
  } />)

  wrap.find('div').prop('onClick')()

  expect(onAnswerSelectedWasInvoked).toEqual(true)
});

it('rerender with new props', () => {
  const wrap = shallow(<Option text="My custom text" />)

  wrap.setProps({ text: "Another custom text" })

  expect(wrap.find('div').text()).toEqual('Another custom text')
});

it('rerender with new click callback', () => {
  const wrap = shallow(<Option />)

  var onAnswerSelectedWasInvoked = false
  wrap.setProps({onAnswerSelected: () =>
    onAnswerSelectedWasInvoked = true
  })
  
  wrap.find('div').prop('onClick')()

  expect(onAnswerSelectedWasInvoked).toEqual(true)
});
