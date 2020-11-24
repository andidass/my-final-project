import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProfile } from "../../../actions/profile";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";

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
  auth: { user },
}) => {
  // posko
  const [profileData, setProfileData] = useState({
    namaPosko: user.name,
    alamatPosko: "",
    dusunPosko: "",
    desaPosko: "",
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
    dusunPosko,
    desaPosko,
    kecPosko,
    kabPosko,
    namaPetugas,
    jabatan,
    lat,
    lng,
  } = profileData;

  const onChange = (e) =>
    setProfileData({ ...profileData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(profileData, history);
    console.log("klik");
  };

  if (profile !== null) {
    return <Redirect to="/posko/data-posko/edit-profile" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="isi">
      <Typography component="div">
        <Box
          fontSize={18}
          fontWeight="fontWeightBold"
          textAlign="center"
          marginTop={3}
        >
          Posko Bencana
        </Box>
      </Typography>
      <Paper variant="outlined" className="body-posko-bencana">
        <form className="body-posko-bencana" onSubmit={(e) => onSubmit(e)}>
          <Grid container>
            <Grid xs={12} sm={6} item>
              {/* <DataPosko /> */}
              <Typography component="div">
                <Box fontSize={17}>Data Posko</Box>
              </Typography>
              <TextField
                name="namaPosko"
                label="Nama Posko"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                required
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
                required
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={alamatPosko}
              />

              <TextField
                name="dusunPosko"
                label="Dusun"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                required
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
                required
                fullWidth
                onChange={(e) => onChange(e)}
                value={desaPosko}
              />
              <TextField
                name="kecPosko"
                label="Kecamatan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                required
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
                required
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
            </Grid>
            <Grid xs={12} sm={6} item>
              {/* <DataPetugas /> */}
              <Typography component="div">
                <Box fontSize={17}>Data Petugas Posko</Box>
              </Typography>
              <TextField
                name="namaPetugas"
                label="Nama Petugas / Relawan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                required
                fullWidth
                onChange={(e) => onChange(e)}
                value={namaPetugas}
              />
              <TextField
                name="jabatan"
                label="Jabatan Petugas / Tugas Relawan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                required
                fullWidth
                onChange={(e) => onChange(e)}
                value={jabatan}
              />
              <Alert />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="small"
              style={{ margin: 8, maxWidth: 500 }}
              startIcon={<SaveIcon />}
            >
              Simpan Profile
            </Button>
          </Grid>
        </form>
      </Paper>
    </div>
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
