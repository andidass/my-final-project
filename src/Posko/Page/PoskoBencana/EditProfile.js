import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProfile } from "../../../actions/profile";
import Alert from "../../../layout/Alert";

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
      lat: loading || !profile.location ? "" : profile.location.lat,
      lng: loading || !profile.location ? "" : profile.location.lng,
      namaPetugas:
        loading || !profile.petugas ? "" : profile.petugas.namaPetugas,
      jabatan: loading || !profile.petugas ? "" : profile.petugas.jabatan,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) =>
    setProfileData({ ...profileData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(profileData, history, true);
  };

  return (
    <div className="isi">
      <Typography component="div">
        <Box
          fontSize={18}
          fontWeight="fontWeightBold"
          marginTop={3}
          textAlign="center"
        >
          Posko Bencana
        </Box>
      </Typography>
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

              <TextField
                name="lat"
                label="Latitude"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={lat}
              />

              <TextField
                name="lng"
                label="Longitude"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={lng}
              />

              {/* <DataPetugas /> */}
              <Typography
                component="div"
                style={{ marginTop: 20, marginBottom: 10, textAlign: "center" }}
              >
                <Box fontSize={17}>Data Petugas Posko</Box>
              </Typography>
              <TextField
                name="namaPetugas"
                label="Petugas Penanggung Jawab Posko"
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
              <Alert />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                style={{ margin: 8, maxWidth: 500 }}
              >
                Update Profile
              </Button>
              <Button
                variant="contained"
                size="small"
                style={{ margin: 8, maxWidth: 500 }}
              >
                <Link to="/posko/data-posko">Kembali</Link>
              </Button>
            </Grid>
            <Grid xs={1} sm={3} item />
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(EditProfile)
);
