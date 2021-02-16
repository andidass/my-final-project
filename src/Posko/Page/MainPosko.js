import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import MenuPosko from "../Components/MenuPosko";

// import { loadUser } from "../../actions/auth";
import { getCurrentProfile } from "../../actions/profile";
import Alert from "../../layout/Alert";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../../Components/Spinner";
import { Typography, Box, Paper } from "@material-ui/core";

const MainPosko = ({
  // loadUser,
  // getCurrentProfile,
  auth: { user, isAuthenticated, token },
  // profile: { profile, loading },
}) => {
  useEffect(() => {
    // loadUser();
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return <Redirect to="/pos/login" />;
  }

  if (user && user.session !== "pos") {
    return <Redirect to="/not-authorized" />;
  }

  return user === null ? (
    <Spinner />
  ) : (
    <div className="full-height">
      <Paper
        variant="outlined"
        style={{ margin: `5%`, width: "90%", backgroundColor: "#F4F6F6" }}
      >
        <div style={{ margin: `2%` }}>
          <Typography variant="h6">
            Hallo, Anda masuk dengan akun<b> {user && user.name} </b>
          </Typography>
          <Typography variant="subtitle1">
            Selalu lakukan update berkala data terkini di {user && user.name}
          </Typography>
          <Typography variant="subtitle1">
            Selamat bekerja, petugas <b>{user && user.petugas}</b>
          </Typography>
        </div>
      </Paper>
      <Alert />
      <MenuPosko />
    </div>
  );
};

MainPosko.propTypes = {
  // loadUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  // loadUser,
  getCurrentProfile,
})(MainPosko);
