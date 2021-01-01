import React, { Fragment } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

// tinggal oper props location:{"lat":"", lng:""}, dan namaPosko

function Map({ location, namaPosko }) {
  return (
    <Fragment>
      {location && (
        <GoogleMap
          defaultZoom={16}
          defaultCenter={{ lat: location.lat, lng: location.lng }}
        >
          <Marker
            position={{ lat: location.lat, lng: location.lng }}
            icon={{
              url: "https://i.ibb.co/stQmjqK/pin-posko.png",
              scaledSize: new window.google.maps.Size(50, 50),
            }}
          >
            <InfoWindow position={{ lat: location.lat, lng: location.lng }}>
              <Fragment>
                <h3 style={{ textAlign: "center" }}>lokasi {namaPosko}</h3>
                <div>
                  lat : {location.lat}, lng:{location.lng}
                </div>
              </Fragment>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      )}
    </Fragment>
  );
}
const WrapMap = withScriptjs(withGoogleMap(Map));

export default function MapPokso({ location, namaPosko }) {
  return (
    <div style={{ width: "100%", height: "50vh" }}>
      <WrapMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCKZEfHCeuefpKow9-keKYD4vTRB41cV5U`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
        namaPosko={namaPosko}
      />
    </div>
  );
}
