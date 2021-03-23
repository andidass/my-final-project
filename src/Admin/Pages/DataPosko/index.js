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

  // if (!user) {
  //   return <Redirect to="/admin/dashboard" />;
  // }

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
        {!user ? (
          <Link to="/main-page">Kembali</Link>
        ) : (
          <Link to="/admin/dashboard">Kembali</Link>
        )}
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
      <div style={{ maxWidth: `95vw`, paddingLeft: `2.5vw` }}>
        <Grid container justify="center" className="grid-container">
          {profiles.length > 0 ? (
            filteredPosko.map((profile) => (
              <DataPosko
                user={user}
                key={profile._id}
                profile={profile}
                kataPencarian={kataPencarian}
              />
            ))
          ) : (
            <div className="no-data">
              <h4>Tidak Ada Data Pos Ditemukan...</h4>
              <img
                src="/img/undraw_empty_xct9.svg"
                alt="React Logo"
                style={{ width: `40%` }}
              />
            </div>
          )}
        </Grid>
      </div>
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
