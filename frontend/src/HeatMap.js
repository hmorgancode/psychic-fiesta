import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const BaseMap = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={14}
  // default center: climacell
  defaultCenter={{ lat: 42.350282, lng: -71.057646 }}
>,
  {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
</GoogleMap>));


// https://maps.googleapis.com/maps/api/js?key=AIzaSyC573QxBOkxPukd7HDO-qBifWF4jV9W42A&libraries=visualization
class HeatMap extends React.Component {
  render() {
    return (
      <div>
        <BaseMap
          isMarkerShown
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyC573QxBOkxPukd7HDO-qBifWF4jV9W42A&libraries=visualization'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }

}

export default HeatMap;
