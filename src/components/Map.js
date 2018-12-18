import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 51.517338,
      lng: -0.073279
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAlH4L5fdDn86TJh-kxwU-9odfft9jdDPI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
