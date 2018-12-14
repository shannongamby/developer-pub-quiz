import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.js'
import quizData from './quizquestions/data'
import { Button } from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quiz data={ quizData } />
        <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
        
          </div>
          </InfoWindow>
          </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCpIBIq2pNTtVdgaWZdqUvRqOqlibzoF4g")
})(App)
