import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
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

import AddIcon from "@material-ui/icons/Add";

const FormProfile = ({ createProfile, history }) => {
  // posko
  const [profileData, setProfileData] = useState({
    namaPosko: "",
    alamatPosko: "",
    dusunPosko: "",
    desaPosko: "",
    kecPosko: "",
    kabPosko: "",
    namaPetugas: "",
    jabatan: "",
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
  } = profileData;

  const onChange = (e) =>
    setProfileData({ ...profileData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(profileData, history);
    console.log("klik");
  };

  return (
    <div className="full-height">
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
        <Grid container>
          <form className="body-posko-bencana" onSubmit={(e) => onSubmit(e)}>
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
                fullWidth
                onChange={(e) => onChange(e)}
                value={jabatan}
              />
              <Alert />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="small"
                startIcon={<AddIcon />}
              >
                Tambahkan
              </Button>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

FormProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(FormProfile)
);
