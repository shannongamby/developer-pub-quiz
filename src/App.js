import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js'
import quizData from './quizquestions/data'
import { Button } from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleComponent } from 'react-google-location'

const API_KEY = "AIzaSyCpIBIq2pNTtVdgaWZdqUvRqOqlibzoF4g"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div className="App">
      <Quiz data={ quizData } />
         <GoogleComponent

          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCpIBIq2pNTtVdgaWZdqUvRqOqlibzoF4g")
})(App)
