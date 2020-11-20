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
  });

  const { name, position, nohp, jobdesc } = profileData;

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
          </form>
        </Grid>
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
