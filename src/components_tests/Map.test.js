import React from 'react';
import ReactDOM from 'react-dom';
import Map from '../components/Map';
import { shallow, mount, render } from 'enzyme';

describe('<Map />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Map />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
