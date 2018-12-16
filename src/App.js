import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js'
import quizData from './quizquestions/data'
import { Button } from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleComponent } from 'react-google-location'

const API_KEY = "AIzaSyA2yE421Wa22_1aNakfIBWdQv265puS1EE"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    console.warn("result return here",this.state.place)
    return (
      <div className="App">
      <Quiz data={ quizData } />
      </div>
    )
  }
}

export default App;
