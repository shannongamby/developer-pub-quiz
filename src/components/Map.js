import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapApi = process.env.REACT_APP_API_KEY;
const style = {
  height: '10%',
  margin: 'auto',
  width: '10%'
}
class Mapping extends Component {

  render(){
    return(
      <div id="map" style={style}>
      <Map google={this.props.google} zoom={14} initialCenter={{
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
