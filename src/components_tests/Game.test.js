import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../components/Game';
import { shallow, mount, render } from 'enzyme';

describe('<Game/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
