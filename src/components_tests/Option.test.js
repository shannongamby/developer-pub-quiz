import React from 'react';
import ReactDOM from 'react-dom';
import Option from '../components/Option';
import { shallow, mount, render } from 'enzyme';

describe('<Option />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Option />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the text', () => {
    const wrap = shallow(<Option text= "<button />"/>);
    expect(wrap.find('div').text()).toEqual('<button />');
  });
});
