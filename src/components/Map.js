import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapApi = process.env.REACT_APP_API_KEY;
let testMark;

class Mapping extends Component {

  testMark = function marker(name, lat, lng) {

  }

  render(){
    return(
      <div>
      <Map className= "Map" style={ {height: '50vh', width:'50%', margin: 'auto'}} google={this.props.google} zoom={14} initialCenter={{
            lat: 51.517338,
            lng: -0.073279
          }}>

      <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

      <Marker name={'The Culpepper'}
              position={{lat: 51.5177141, lng: -0.0743158}} />
      <Marker name={'Apples & Pears Bar'}
              position={{lat: 51.5169396, lng: -0.070203}} />
      <Marker name={'The Grocer'}
              position={{lat: 51.5200787, lng: -0.0762836}} />
      <Marker name={'The Astronomer'}
              position={{lat: 51.5179399, lng: -0.0788903}} />
      <Marker name={'The Magpie'}
              position={{lat: 51.5171484, lng: -0.0791323}} />
      <Marker name={'Leman Street Tavern'}
              position={{lat: 51.5138466, lng: -0.0705016}} />
      <Marker name={"Goodman's Field"}
              position={{lat: 51.5114809, lng: -0.0728171}} />
      <Marker name={"The Ten Bells"}
              position={{lat: 51.519358, lng: -0.0743816}} />
      <Marker name={"The Pride of Spitalfields"}
              position={{lat: 51.5189067, lng: -0.0712574}} />
      <Marker name={"The Golden Hart"}
              position={{lat: 51.5201174, lng: -0.0742873}} />
      <Marker name={"The Diner Spitalfields"}
              position={{lat: 51.51948, lng: -0.075858}} />
      <Marker name={"The Williams Ale & Cider House"}
              position={{lat: 51.5183664, lng: -0.0784902}} />
      <Marker name={"The Bell"}
              position={{lat: 51.5158898, lng: -0.0757336}} />
      <Marker name={"The Hoop and Grapes"}
              position={{lat: 51.5142071, lng: -0.0741732}} />
      <Marker name={"Alice"}
              position={{lat: 51.5150812, lng: -0.0781154}} />
      <Marker name={"The Bull"}
              position={{lat: 51.5169543, lng: -0.0804983}} />
      <Marker name={"Grapeshots"}
              position={{lat: 51.5180593, lng: -0.0775255}} />
      <Marker name={"Kings Stores"}
              position={{lat: 51.5179809, lng: -0.0778893}} />
      <Marker name={"Dirty Dicks"}
              position={{lat: 51.5180407, lng: -0.0796184}} />
      <Marker name={"The Water Poet"}
              position={{lat: 51.5210245, lng: -0.0779423}} />
      <Marker name={"The Crown and Shuttle"}
              position={{lat: 51.5224531, lng: -0.078184}} />
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
