import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

import { getAllDataPosko } from "../actions/profile";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

function Map({ profiles }) {
  const [selectedPosko, setSelectedPosko] = useState(null);
  return (
    <Fragment>
      {profiles.length > 0 && (
        <GoogleMap
          defaultZoom={12}
          // defaultCenter={{ lat: -8.582086102277305, lng: 116.12219436577753 }}
          defaultCenter={{
            lat: profiles[0].location.lat,
            lng: profiles[0].location.lng,
          }}
        >
          {profiles.map((profile) => (
            <Marker
              key={profile._id}
              position={{
                lat: profile.location.lat,
                lng: profile.location.lng,
              }}
              onClick={() => {
                setSelectedPosko(profile);
              }}
              icon={{
                url: "https://i.ibb.co/stQmjqK/pin-posko.png",
                scaledSize: new window.google.maps.Size(50, 50),
              }}
            />
          ))}
          {selectedPosko && (
            <InfoWindow
              position={{
                lat: selectedPosko.location.lat,
                lng: selectedPosko.location.lng,
              }}
              onCloseClick={() => {
                setSelectedPosko(null);
              }}
            >
              <Fragment>
                <Typography variant="subtitle1">
                  lokasi {selectedPosko.namaPosko}
                </Typography>
                <Typography variant="subtitle2">
                  {selectedPosko.alamatPosko}
                </Typography>
              </Fragment>
            </InfoWindow>
          )}
          {/* </Marker> */}
        </GoogleMap>
      )}
    </Fragment>
  );
}
const WrapMap = withScriptjs(withGoogleMap(Map));

const MapPosko = ({ getAllDataPosko, profile: { profiles } }) => {
  useEffect(() => {
    getAllDataPosko();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <div style={{ width: "50vw", height: "70vh" }}>
    <WrapMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCKZEfHCeuefpKow9-keKYD4vTRB41cV5U`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      profiles={profiles}
    />
    // </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

MapPosko.propTypes = {
  getAllDataPosko: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getAllDataPosko,
})(MapPosko);
