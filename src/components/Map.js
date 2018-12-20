import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapApi = process.env.REACT_APP_API_KEY;

class Mapping extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render(){
    return(
      <div className= "Map">
      <Map style= {{ height: '70vh', width: '98.3%'}} google={this.props.google} zoom={15} initialCenter={{
            lat: 51.517338,
            lng: -0.073279
          }}>

      <Marker onClick={this.onMarkerClick}
        name={'Current location'}
        icon={{
          url: require('../img/Current-location-pin.png'),
          scaledSize: { width: 45, height: 45},
          anchor: { x: 15, y: 15 }
        }}/>

      <Marker onClick={this.onMarkerClick}
        name={'The Culpepper'}
        position={{lat: 51.5168721, lng: -0.0730934}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }}/>
      <Marker onClick={this.onMarkerClick}
        name={'Apples & Pears Bar'}
        position={{lat: 51.5169396, lng: -0.070203}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={'The Grocer'}
        position={{lat: 51.5200787, lng: -0.0762836}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={'The Astronomer'}
        position={{lat: 51.5179399, lng: -0.0788903}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={'The Magpie'}
        position={{lat: 51.5171484, lng: -0.0791323}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={'Leman Street Tavern'}
        position={{lat: 51.5138466, lng: -0.0705016}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"Goodman's Field"}
        position={{lat: 51.5114809, lng: -0.0728171}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"The Ten Bells"}
        position={{lat: 51.519358, lng: -0.0743816}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"The Pride of Spitalfields"}
        position={{lat: 51.5189067, lng: -0.0712574}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"The Golden Hart"}
        position={{lat: 51.5201174, lng: -0.0742873}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"The Diner Spitalfields"}
        position={{lat: 51.51948, lng: -0.075858}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"The Williams Ale & Cider House"}
        position={{lat: 51.5183664, lng: -0.0784902}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"The Bell"}
        position={{lat: 51.5158898, lng: -0.0757336}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"The Hoop and Grapes"}
        position={{lat: 51.5142071, lng: -0.0741732}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"Alice"}
        position={{lat: 51.5150812, lng: -0.0781154}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"The Bull"}
        position={{lat: 51.5169543, lng: -0.0804983}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"Grapeshots"}
        position={{lat: 51.5180593, lng: -0.0775255}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"Kings Stores"}
        position={{lat: 51.5179809, lng: -0.0778893}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"Dirty Dicks"}
        position={{lat: 51.5180407, lng: -0.0796184}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"The Water Poet"}
        position={{lat: 51.5210245, lng: -0.0779423}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <Marker onClick={this.onMarkerClick}
        name={"The Crown and Shuttle"}
        position={{lat: 51.5224531, lng: -0.078184}}
        icon={{
          url: require('../img/beer-pin.png'),
          scaledSize: { width: 30, height: 30},
          anchor: { x: 15, y: 15 }
        }} />
      <InfoWindow onClose={this.onInfoWindowClose}
        marker={this.state.activeMarker}
        visible={true}>
        <div>
          <h6><span role="img" aria-label="two_beers">🍺</span>{this.state.selectedPlace.name} <span role="img" aria-label="two_beers">🍺</span></h6>
        </div>
        </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (mapApi)
})(Mapping)
