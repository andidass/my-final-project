import React, { useState, Fragment } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProfile } from "../../../actions/profile";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";
import MapPosko from "../../../layout/Map";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";

import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";

const FormProfile = ({
  profile: { profile, loading },
  createProfile,
  history,
  auth: { user, isAuthenticated },
}) => {
  // posko
  const [profileData, setProfileData] = useState({
    namaPosko: user && user.name,
    alamatPosko: "",
    kecPosko: "",
    kelPosko: "",
    kabPosko: "",
    namaPetugas: "",
    jabatan: "",
    lat: "",
    lng: "",
    noHp: "",
  });

  const {
    namaPosko,
    alamatPosko,
    kelPosko,
    kecPosko,
    kabPosko,
    namaPetugas,
    jabatan,
    lat,
    lng,
    noHp,
  } = profileData;

  const onChange = (e) =>
    setProfileData({ ...profileData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(profileData, history);
    console.log("klik");
  };

  const setCurrentLocation = (e) => {
    e.preventDefault();
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(callback, error, options);
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    function callback(position) {
      setProfileData({
        ...profileData,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }
  };

  if (profile !== null) {
    return <Redirect to="/pos/data-pos/edit-profile" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Profile Pos Bencana</Typography>
        <Typography variant="subtitle2">
          Buat Profile Pos {user && user.name}
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/pos/data-pos">Kembali</Link>
      </Button>

      <Grid container justify="center">
        <Paper variant="outlined" className="paper-form">
          <Grid item style={{ padding: `2rem` }}>
            <Typography component="div">
              <Box fontSize={17}>
                <b>Data Pos</b>
              </Box>
            </Typography>
            <form onSubmit={(e) => onSubmit(e)}>
              <TextField
                name="namaPosko"
                label="Nama Pos"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={namaPosko}
              />
              <TextField
                name="alamatPosko"
                label="Alamat Pos"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={2}
                onChange={(e) => onChange(e)}
                value={alamatPosko}
              />
              <TextField
                name="kelPosko"
                label="Kelurahan/Desa"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={kelPosko}
              />
              <TextField
                name="kecPosko"
                label="Kecamatan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={kecPosko}
              />
              <TextField
                name="kabPosko"
                label="Kabupaten"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={kabPosko}
              />
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: 8 }}
                  onClick={(e) => setCurrentLocation(e)}
                  startIcon={<LocationSearchingIcon />}
                >
                  Set Lokasi
                </Button>
              </div>
              {lat && lng && (
                <MapPosko
                  location={{ lat: lat, lng: lng }}
                  namaPosko={namaPosko}
                />
              )}
              <Typography
                component="div"
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                  textAlign: "center",
                }}
              >
                <Box fontSize={17}>
                  <b>Data Petugas Pos</b>
                </Box>
              </Typography>
              <TextField
                name="namaPetugas"
                label="Petugas Koord. Pos"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={namaPetugas}
              />
              <TextField
                name="jabatan"
                label="Jabatan Petugas"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={jabatan}
              />
              <TextField
                name="noHp"
                label="No Hp"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={noHp}
              />
              <Alert />
              <div>
                <Button
                  variant="contained"
                  className="button"
                  color="primary"
                  style={{ margin: 8, maxWidth: 500 }}
                  type="submit"
                  startIcon={<SaveIcon />}
                >
                  Buat Profile
                </Button>
              </div>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
};

FormProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(FormProfile)
);
