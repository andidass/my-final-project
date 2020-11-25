import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deletePetugas } from "../../../actions/profile";
import TabelPetugas from "./TabelPetugas";
import Alert from "../../../layout/Alert";

import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

const ProfilePosko = ({ profile: { profile, loading }, deletePetugas }) => {
  // posko
  const [profileData, setProfileData] = useState({
    namaPosko: "",
    alamatPosko: "",
    kecPosko: "",
    kabPosko: "",
    namaPetugas: "",
    jabatan: "",
    lat: "",
    lng: "",
  });

  const {
    namaPosko,
    alamatPosko,
    kecPosko,
    kabPosko,
    namaPetugas,
    jabatan,
    lat,
    lng,
  } = profileData;

  useEffect(() => {
    setProfileData({
      namaPosko: loading || !profile.namaPosko ? "" : profile.namaPosko,
      alamatPosko: loading || !profile.alamatPosko ? "" : profile.alamatPosko,
      dusunPosko: loading || !profile.dusunPosko ? "" : profile.dusunPosko,
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

  function onDelete(index) {
    deletePetugas(index);
  }

  return (
    <div>
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
        <form className="body-posko-bencana">
          <Grid container justify="space-around">
            {/* <Grid xs={1} sm={2} item /> */}
            <Grid xs={10} sm={4} item>
              <Typography
                // variant="h1"
                component="div"
                align="center"
                style={{ marginBottom: 10 }}
              >
                <Box fontSize={17}>Data Posko</Box>
              </Typography>
              <TextField
                name="namaPosko"
                label="Nama Posko"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                disabled
                value={namaPosko}
              />
              <TextField
                name="alamatPosko"
                label="Alamat Posko"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={2}
                disabled
                value={alamatPosko}
              />
              <TextField
                name="kecPosko"
                label="Kecamatan"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                disabled
                value={kecPosko}
              />
              <TextField
                name="kabPosko"
                label="Kabupaten"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                disabled
                value={kabPosko}
              />
              <TextField
                name="lat"
                label="Latitude"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                disabled
                value={lat}
              />
              <TextField
                name="lng"
                label="Longitude"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                disabled
                value={lng}
              />
            </Grid>
            <Grid xs={10} sm={4} item>
              <Typography
                component="div"
                align="center"
                style={{ marginBottom: 10 }}
              >
                <Box fontSize={17}>Data Petugas Posko</Box>
              </Typography>
              <TextField
                name="namaPetugas"
                label="Petugas Penanggung Jawab Posko"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                disabled
                value={namaPetugas}
              />
              <TextField
                name="jabatan"
                label="Jabatan Petugas"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                disabled
                value={jabatan}
              />

              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ margin: 8 }}
              >
                <Link
                  style={{ color: "white" }}
                  to="/posko/data-posko/edit-profile"
                >
                  Edit Profile
                </Link>
              </Button>
              <Button variant="contained" size="small" style={{ margin: 8 }}>
                <Link to="/posko/dashboard">Kembali</Link>
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ margin: 8 }}
              >
                <Link
                  style={{ color: "white" }}
                  to="/posko/data-posko/data-petugas"
                >
                  Tambah Petugas / Volunteer
                </Link>
              </Button>
            </Grid>
            {/* <Grid xs={1} sm={2} item /> */}
          </Grid>
          <Alert />
        </form>
        <TabelPetugas allPetugas={profile.allPetugas} onDelete={onDelete} />
      </Paper>
    </div>
  );
};

ProfilePosko.propTypes = {
  deletePetugas: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { deletePetugas })(
  withRouter(ProfilePosko)
);
