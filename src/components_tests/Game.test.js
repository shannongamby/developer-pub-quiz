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

  it('renders quiz one when click play for pints', () => {
    const wrap = shallow( <Game data={ quizData } />)

    wrap.find('#play_button').simulate('click')

    expect(wrap.find('#play_button').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#quiz_one').prop('style')).not.toHaveProperty('display', 'none')
    expect(wrap.find('#switch_player').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#quiz_two').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#end_screen_1').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#end_screen_2').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#play_again').prop('style')).toHaveProperty('display', 'none')
  });

  it('renders quiz one when click play for pints', () => {
    const wrap = shallow( <Game data={ quizData } />)

    wrap.find('#play_button').simulate('click')

    expect(wrap.find('#play_button').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#quiz_one').prop('style')).not.toHaveProperty('display', 'none')
    expect(wrap.find('#switch_player').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#quiz_two').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#end_screen_1').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#end_screen_2').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#play_again').prop('style')).toHaveProperty('display', 'none')
  });

  it('renders switch player when player one finished answering questions', () => {
    const wrap = shallow( <Game data={ quizData } />)

    wrap.find('#play_button').simulate('click')

    wrap.find('#quiz_one Quiz').at(0).prop('handleQuizSwitch')()

    expect(wrap.find('#play_button').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#quiz_one').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#switch_player').prop('style')).not.toHaveProperty('display', 'none')
    expect(wrap.find('#quiz_two').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#end_screen_1').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#end_screen_2').prop('style')).toHaveProperty('display', 'none')
    expect(wrap.find('#play_again').prop('style')).toHaveProperty('display', 'none')
  });


    it('renders quiz 2 after switch player is clicked', () => {
      const wrap = shallow( <Game data={ quizData } />)

      wrap.find('#play_button').simulate('click')

      wrap.find('#quiz_one Quiz').at(0).prop('handleQuizSwitch')()

      wrap.find('#switch_player').simulate('click')

      expect(wrap.find('#play_button').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#quiz_one').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#switch_player').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#quiz_two').prop('style')).not.toHaveProperty('display', 'none')
      expect(wrap.find('#end_screen_1').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#end_screen_2').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#play_again').prop('style')).toHaveProperty('display', 'none')
    });

    it('renders quiz 2 after switch player is clicked', () => {
      const wrap = shallow( <Game data={ quizData } />)

      wrap.find('#play_button').simulate('click')

      wrap.find('#quiz_one Quiz').at(0).prop('handleQuizSwitch')()

      wrap.find('#switch_player').simulate('click')

      wrap.find('#quiz_two Quiz').at(0).prop('handleQuizSwitch')()

      expect(wrap.find('#play_button').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#quiz_one').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#switch_player').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#quiz_two').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#end_screen_1').prop('style')).not.toHaveProperty('display', 'none')
      expect(wrap.find('#end_screen_2').prop('style')).not.toHaveProperty('display', 'none')
      expect(wrap.find('#play_again').prop('style')).not.toHaveProperty('display', 'none')
    });

    it('renders play again after second quiz is finished', () => {
      const wrap = shallow( <Game data={ quizData } />)

      wrap.find('#play_button').simulate('click')

      wrap.find('#quiz_one Quiz').at(0).prop('handleQuizSwitch')()

      wrap.find('#switch_player').simulate('click')

      wrap.find('#quiz_two Quiz').at(0).prop('handleQuizSwitch')()

      expect(wrap.find('#play_button').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#quiz_one').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#switch_player').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#quiz_two').prop('style')).toHaveProperty('display', 'none')
      expect(wrap.find('#end_screen_1').prop('style')).not.toHaveProperty('display', 'none')
      expect(wrap.find('#end_screen_2').prop('style')).not.toHaveProperty('display', 'none')
      expect(wrap.find('#play_again').prop('style')).not.toHaveProperty('display', 'none')
      expect(wrap.find('#map_button').prop('style')).not.toHaveProperty('display', 'none')

    });

});
