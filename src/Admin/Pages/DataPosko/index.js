import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DataPosko from "./DataPosko";

import { getAllDataPosko } from "../../../actions/profile.js";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./DataPosko.css";

const AllDataPosko = ({
  getAllDataPosko,
  profile: { profiles, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getAllDataPosko();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [kataPencarian, setKataPencarian] = useState("");
  const onChange = (e) => setKataPencarian(e.target.value);

  // filter data with search feature
  const filteredPosko = profiles.filter((profile) => {
    return (
      profile.namaPosko.toLowerCase().indexOf(kataPencarian.toLowerCase()) !==
      -1
    );
  });

  if (!user) {
    return <Redirect to="/admin/login" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Pos Pengungsian</Typography>
        <Typography variant="subtitle2">Data semua pos</Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/admin/dashboard">Kembali</Link>
      </Button>
      <div className="search">
        <TextField
          id="kataPencarian"
          placeholder="cari pos pengungsian"
          style={{ minWidth: 300 }}
          margin="normal"
          variant="outlined"
          size="small"
          autoFocus
          onChange={(e) => onChange(e)}
          value={kataPencarian}
        />
      </div>
      <Grid container justify="center" className="grid-container">
        {profiles.length > 0 ? (
          filteredPosko.map((profile) => (
            <DataPosko
              key={profile._id}
              profile={profile}
              kataPencarian={kataPencarian}
            />
          ))
        ) : (
          <h4>Tidak Ada Profile Ditemukan...</h4>
        )}
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

AllDataPosko.propTypes = {
  getAllDataPosko: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getAllDataPosko })(AllDataPosko);
