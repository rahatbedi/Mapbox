import React, { Component } from 'react';
import ReactMabboxGL , {Layer , Feature} from "react-mapbox-gl";
 
const Map = ReactMabboxGL({accessToken: "pk.eyJ1IjoicmFoYXRiZWRpIiwiYSI6ImNqbGV4Y2tybTBxdm8zcXBjbms4Znpma3UifQ.0s_SXYQUkR6ZicbjhJpoNQ"});
class Maps extends Component {
  render() {
    return (
      <div>
        <Map
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