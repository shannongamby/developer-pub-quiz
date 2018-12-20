import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../components/Game';
import quizData from '../quizquestions/data'

import { shallow, mount, render } from 'enzyme';

describe('<Game/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders play for pints as the first view', () => {
    const wrap = shallow( <Game data={ quizData } />)

    expect(wrap.find('#play_button').prop('style')).not.toHaveProperty('display', 'none')
    expect(wrap.find('#quiz_one').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#switch_player').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#quiz_two').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#end_screen_1').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#end_screen_2').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#play_again').prop('style')).toHaveProperty('display', 'none')

  });
});
