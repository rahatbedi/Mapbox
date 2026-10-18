import React, { Component } from 'react';
import ReactMapboxGL, {Layer , Feature} from "react-mapbox-gl";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const accessToken = import.meta.env.REACT_APP_MAPBOX_TOKEN;
// react-mapbox-gl's CJS build sets the token on a copy of the mapbox-gl module,
// so set it on mapbox-gl directly as well.
mapboxgl.accessToken = accessToken;
const Map = ReactMapboxGL({accessToken});
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
