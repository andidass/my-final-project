import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "../../../layout/Alert";

import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

const DataProfilePosko = ({
  profile: { profile, loading },
  auth: { user },
}) => {
  // posko
  const [profileData, setProfileData] = useState({
    name: "",
    position: "",
    nphp: "",
    jobdesc: "",
  });

  const { name, position, nohp, jobdesc } = profileData;

  const onChange = (e) =>
    setProfileData({ ...profileData, [e.target.name]: e.target.value });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   createProfile(profileData, history);
  //   console.log("klik");
  // };

  useEffect(() => {
    // getCurrentProfile();
    setProfileData({
      name: loading || !user.name ? "" : user.name,
      position: loading || !user.position ? "" : user.position,
      nohp: loading || !profile.nohp ? "" : profile.nohp,
      jobdesc: loading || !profile.jobdesc ? "" : profile.jobdesc,
    });
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
        <Grid container>
          <form className="body-posko-bencana">
            {" "}
            {/*  onSubmit={(e) => onSubmit(e)} */}
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

DataProfilePosko.propTypes = {
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(DataProfilePosko));
