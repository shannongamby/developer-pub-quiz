import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js'
import quizData from './quizquestions/data'
import { Button } from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Cinzel:400,700|Cinzel+Decorative|Marcellus|Sanchez');
        </style>
          <Quiz data={ quizData } />
        </div>
        <div className="thing">
          <Map google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>

            </InfoWindow>
            </Map>
          </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCpIBIq2pNTtVdgaWZdqUvRqOqlibzoF4g")
})(App)
