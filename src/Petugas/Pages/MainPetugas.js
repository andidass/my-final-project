import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import MenuPetugas from "../Components/MenuPetugas";
import { getCurrentProfile } from "../../actions/profilePetugas";
import { getCurrentDataBencana } from "../../actions/dataBencana";
import { loadUser } from "../../actions/authPetugas";
import Alert from "../../layout/Alert";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../../Components/Spinner";
import { Typography, Box } from "@material-ui/core";

const MainPetugas = ({
  auth: { user, isAuthenticated, loading },
  profile: { profile },
  loadUser,
  getCurrentProfile,
}) => {
  useEffect(() => {
    loadUser();
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/petugas/login" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="full-height">
      <Alert />
      <Typography component="div">
        <Box
          textAlign="center"
          fontSize={20}
          fontWeight="fontWeightBold"
          marginTop={4}
          color="red"
        >
          welcome {user && user.name}
        </Box>
      </Typography>
      <MenuPetugas />
    </div>
  );
};

MainPetugas.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  loadUser,
})(MainPetugas);
