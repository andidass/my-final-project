import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProfile } from "../../../actions/profilePetugas";
import Alert from "../../../layout/Alert";

import SaveIcon from "@material-ui/icons/Save";
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
    dusun: "",
    desa: "",
    kabupaten: "",
    regdesc: "",
  });

  const {
    name,
    position,
    nohp,
    jobdesc,
    dusun,
    desa,
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
      desa: loading || !profile.desa ? "" : profile.desa,
      dusun: loading || !profile.dusun ? "" : profile.dusun,
      kabupaten: loading || !profile.kabupaten ? "" : profile.kabupaten,
      regdesc: loading || !profile.regdesc ? "" : profile.regdesc,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography component="div">
        <Box
          fontSize={18}
          fontWeight="fontWeightBold"
          marginTop={3}
          textAlign="center"
        >
          Profile Petugas
        </Box>
      </Typography>
      <Paper variant="outlined" className="body-posko-bencana">
        <form className="body-posko-bencana" onSubmit={(e) => onSubmit(e)}>
          <Grid container justify="space-around">
            <Grid xs={12} sm={6} item>
              {/* <DataPosko /> */}
              <Typography component="div">
                <Box fontSize={17}>Data Posko</Box>
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
                <Box fontSize={17}>Lingkup Wilayah Tugas</Box>
              </Typography>
              <TextField
                name="dusun"
                label="Dusun"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={dusun}
              />
              <TextField
                name="desa"
                label="Desa"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={desa}
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
          <Button
            variant="contained"
            size="small"
            style={{ margin: 8, maxWidth: 500 }}
          >
            <Link to="/petugas/dashboard">Kembali</Link>
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
