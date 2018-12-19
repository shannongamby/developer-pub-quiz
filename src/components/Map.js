import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapApi = process.env.REACT_APP_API_KEY;

class Mapping extends Component {

  render(){
    return(
      <div className= "Map">
      <Map style={ {height: '50vh', width:'100%'}} google={this.props.google} zoom={14} initialCenter={{
            lat: 51.517338,
            lng: -0.073279
          }}>

      <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

      <InfoWindow onClose={this.onInfoWindowClose}>

      </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (mapApi)
})(Mapping)
