import React, { Fragment, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProfile } from "../../../actions/profile";
import Alert from "../../../layout/Alert";
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

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  history,
  auth: { user },
}) => {
  // posko
  const [profileData, setProfileData] = useState({
    namaPosko: "",
    alamatPosko: "",
    // dusunPosko: "",
    // desaPosko: "",
    kecPosko: "",
    kabPosko: "",
    lat: "",
    lng: "",
    namaPetugas: "",
    jabatan: "",
    noHp: "",
  });

  const {
    namaPosko,
    alamatPosko,
    // dusunPosko,
    // desaPosko,
    kecPosko,
    kabPosko,
    lat,
    lng,
    namaPetugas,
    jabatan,
    noHp,
  } = profileData;

  useEffect(() => {
    setProfileData({
      namaPosko: loading || !profile.namaPosko ? "" : profile.namaPosko,
      alamatPosko: loading || !profile.alamatPosko ? "" : profile.alamatPosko,
      dusunPosko: loading || !profile.dusunPosko ? "" : profile.dusunPosko,
      //   desaPosko: loading || !profile.desaPosko ? "" : profile.desaPosko,
      //   dusunPosko: loading || !profile.dusunPosko ? "" : profile.dusunPosko,
      kecPosko: loading || !profile.kecPosko ? "" : profile.kecPosko,
      kabPosko: loading || !profile.kabPosko ? "" : profile.kabPosko,
      lat: loading || !profile.location.lat ? "" : profile.location.lat,
      lng: loading || !profile.location.lng ? "" : profile.location.lng,
      namaPetugas:
        loading || !profile.petugas.namaPetugas
          ? ""
          : profile.petugas.namaPetugas,
      jabatan:
        loading || !profile.petugas.jabatan ? "" : profile.petugas.jabatan,
      noHp: loading || !profile.petugas.noHp ? "" : profile.petugas.noHp,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) =>
    setProfileData({ ...profileData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(profileData, history, true);
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

  return (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Edit Profile Pos Bencana</Typography>
        <Typography variant="subtitle2">
          Profile Pos {user && user.name}
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/posko/data-posko">Kembali</Link>
      </Button>
      <div className="isi">
        <Paper variant="outlined" className="body-posko-bencana">
          <form className="body-posko-bencana" onSubmit={(e) => onSubmit(e)}>
            <Grid container>
              <Grid xs={1} sm={3} item />
              <Grid xs={10} sm={6} item>
                {/* <DataPosko /> */}
                <Typography
                  component="div"
                  style={{ marginBottom: 10, textAlign: "center" }}
                >
                  <Box fontSize={17}>Data Posko</Box>
                </Typography>
                <TextField
                  name="namaPosko"
                  label="Nama Posko"
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
                  label="Alamat Posko"
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

                {/* <TextField
                name="dusunPosko"
                label="Dusun"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={dusunPosko}
              />
              <TextField
                name="desaPosko"
                label="Desa"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={desaPosko}
              /> */}
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

                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: 8, maxWidth: 500 }}
                  onClick={(e) => setCurrentLocation(e)}
                  startIcon={<LocationSearchingIcon />}
                >
                  Set Lokasi
                </Button>
                <MapPosko
                  location={{ lat: lat, lng: lng }}
                  namaPosko={namaPosko}
                />
                <Typography
                  component="div"
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    textAlign: "center",
                  }}
                >
                  <Box fontSize={17}>Data Petugas Posko</Box>
                </Typography>
                <TextField
                  name="namaPetugas"
                  label="Petugas Koord. Posko"
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  fullWidth
                  style={{ margin: 8, maxWidth: 500 }}
                >
                  Update Profile
                </Button>
                <Alert />
              </Grid>
              <Grid xs={1} sm={3} item />
            </Grid>
          </form>
        </Paper>
      </div>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(EditProfile)
);
