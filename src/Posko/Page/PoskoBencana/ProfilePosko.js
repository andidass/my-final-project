import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../../actions/profile";
import Alert from "../../../layout/Alert";

import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

const ProfilePosko = ({
  profile: { profile, loading },
  getCurrentProfile,
  history,
}) => {
  // posko
  const [profileData, setProfileData] = useState({
    namaPosko: "",
    alamatPosko: "",
    kecPosko: "",
    kabPosko: "",
    namaPetugas: "",
    jabatan: "",
  });

  const {
    namaPosko,
    alamatPosko,
    kecPosko,
    kabPosko,
    namaPetugas,
    jabatan,
  } = profileData;

  useEffect(() => {
    getCurrentProfile();
    setProfileData({
      namaPosko: loading || !profile.namaPosko ? "" : profile.namaPosko,
      alamatPosko: loading || !profile.alamatPosko ? "" : profile.alamatPosko,
      dusunPosko: loading || !profile.dusunPosko ? "" : profile.dusunPosko,
      kecPosko: loading || !profile.kecPosko ? "" : profile.kecPosko,
      kabPosko: loading || !profile.kabPosko ? "" : profile.kabPosko,
      namaPetugas:
        loading || !profile.petugas ? "" : profile.petugas.namaPetugas,
      jabatan: loading || !profile.petugas ? "" : profile.petugas.jabatan,
    });
  }, []);

  return (
    <div className="full-height">
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
          <Grid container>
            <Grid xs={1} sm={2} item />
            <Grid xs={5} sm={4} item>
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
                disabled
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
                disabled
                value={alamatPosko}
              />
              <TextField
                name="kecPosko"
                label="Kecamatan"
                style={{ margin: 8, maxWidth: 500 }}
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
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                disabled
                value={kabPosko}
              />
            </Grid>
            <Grid xs={5} sm={4} item>
              <Typography
                component="div"
                style={{ marginTop: 20, marginBottom: 10, textAlign: "center" }}
              >
                <Box fontSize={17}>Data Petugas Posko</Box>
              </Typography>
              <TextField
                name="namaPetugas"
                label="Nama Petugas / Relawan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                disabled
                value={namaPetugas}
              />
              <TextField
                name="jabatan"
                label="Jabatan Petugas / Tugas Relawan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                disabled
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
                <Link to="/posko/data-posko/edit-profile">Edit Profile</Link>
              </Button>
              <Button
                variant="contained"
                size="small"
                style={{ margin: 8, maxWidth: 500 }}
              >
                <Link to="/posko/dashboard">Kembali</Link>
              </Button>
            </Grid>
            <Grid xs={1} sm={2} item />
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

ProfilePosko.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(
  withRouter(ProfilePosko)
);
