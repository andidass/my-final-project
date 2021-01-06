import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProfile } from "../../../actions/profilePetugas";
import Alert from "../../../layout/Alert";

import SaveIcon from "@material-ui/icons/Save";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

const DataProfilePosko = ({
  createProfile,
  profile: { profile, loading },
  auth: { user },
  history,
}) => {
  // posko
  const [profileData, setProfileData] = useState({
    name: "",
    position: "",
    nphp: "",
    jobdesc: "",
    kecDesa: "",
    kelurahan: "",
    kabupaten: "",
    regdesc: "",
  });

  const {
    name,
    position,
    nohp,
    jobdesc,
    kecDesa,
    kelurahan,
    kabupaten,
    regdesc,
  } = profileData;

  const onChange = (e) =>
    setProfileData({ ...profileData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(profileData, history, true);
  };

  useEffect(() => {
    setProfileData({
      name: loading || !user.name ? "" : user.name,
      position: loading || !user.position ? "" : user.position,
      nohp: loading || !profile.nohp ? "" : profile.nohp,
      jobdesc: loading || !profile.jobdesc ? "" : profile.jobdesc,
      kelurahan: loading || !profile.kelurahan ? "" : profile.kelurahan,
      kecDesa: loading || !profile.kecDesa ? "" : profile.kecDesa,
      kabupaten: loading || !profile.kabupaten ? "" : profile.kabupaten,
      regdesc: loading || !profile.regdesc ? "" : profile.regdesc,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="sub-heading">
        <Typography variant="h5">Profile Petugas</Typography>
        <Typography variant="subtitle2">Update Profile Petugas</Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/petugas/dashboard">Kembali</Link>
      </Button>
      <Paper variant="outlined" className="body-posko-bencana">
        <form className="body-posko-bencana" onSubmit={(e) => onSubmit(e)}>
          <Grid container justify="space-around">
            <Grid xs={12} sm={6} item>
              {/* <DataPosko /> */}
              <Typography component="div">
                <Box fontSize={17}>
                  <b>Data Posko</b>
                </Box>
              </Typography>
              <TextField
                name="name"
                label="Nama Petugas"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={name}
              />
              <TextField
                name="position"
                label="Jabatan Petugas"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={position}
              />

              <TextField
                name="nohp"
                label="No HP Petugas"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={nohp}
              />
              <TextField
                name="jobdesc"
                label="Deskripsi Tugas"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={jobdesc}
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              {/* <DataPosko /> */}
              <Typography component="div">
                <Box fontSize={17}>
                  <b>Lingkup Wilayah Tugas</b>
                </Box>
              </Typography>
              <TextField
                name="kecDesa"
                label="Kecamatan Desa-Dusun"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={kecDesa}
              />
              <TextField
                name="kelurahan"
                label="Kelurahan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={kelurahan}
              />

              <TextField
                name="kabupaten"
                label="Kabupaten"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={kabupaten}
              />
              <TextField
                name="regdesc"
                label="Deskripsi Wilayah"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={regdesc}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
            style={{ margin: 8, maxWidth: 500 }}
          >
            Simpan
          </Button>
          <Alert />
        </form>
      </Paper>
    </div>
  );
};

DataProfilePosko.propTypes = {
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(DataProfilePosko)
);
