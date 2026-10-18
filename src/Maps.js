import React, { Component } from 'react';
import ReactMapboxGL, {Layer , Feature} from "react-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGL({accessToken: process.env.REACT_APP_MAPBOX_TOKEN});
class Maps extends Component {
  render() {
    return (
      <div>
        <Map
          // react-mapbox-gl's `style` is a Mapbox style URL, not a CSS object
          // eslint-disable-next-line react/style-prop-object
          style="mapbox://styles/mapbox/streets-v9"
          center = {[-71.0589 , 42.3601]}
          zoom = {[2]}
          containerStyle={{ 
          height: "100vh",
          width: "100vw"
        }}>
          <Layer 
            type="symbol"
            id="marker"
            layout={{"icon-image": "marker-15"}}>
            <Feature coordinates={[-71.0589 , 42.3601]} />
          </Layer>
        </Map>
      </div>
      );
  }
}

export default Maps;
