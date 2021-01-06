import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProfile } from "../../../actions/profilePetugas";
import Alert from "../../../layout/Alert";

import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SaveIcon from "@material-ui/icons/Save";

const FormProfile = ({
  //   porfilePetugas: { profilePosko, loading },
  createProfile,
  history,
  auth: { user },
}) => {
  // posko
  const [profileData, setProfileData] = useState({
    name: user.name,
    position: user.position,
    nohp: "",
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
    createProfile(profileData, history);
    console.log("klik");
  };

  //   if (porfilePetugas !== null) {
  //     return <Redirect to="/posko/data-posko/edit-profile" />;
  //   }

  return (
    <div>
      <div className="sub-heading">
        <Typography variant="h5">Profile Petugas</Typography>
        <Typography variant="subtitle2">Buat Profile Petugas</Typography>
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

FormProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  //   porfilePetugas: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  //   porfilePetugas: state.porfilePetugas,
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(FormProfile)
);
