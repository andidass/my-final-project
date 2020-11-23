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
import { Typography, Box, Button } from "@material-ui/core";

const MainPetugas = ({
  auth: { user },
  loadUser,
  getCurrentProfile,
  getCurrentDataBencana,
}) => {
  useEffect(() => {
    loadUser();
    getCurrentProfile();
    getCurrentDataBencana();
  }, []);

  // if (user.session === null) {
  //   return <Redirect to="/error" />;
  // }
  return (
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
  getCurrentProfile: PropTypes.func.isRequired,
  getCurrentDataBencana: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  getCurrentDataBencana,
  loadUser,
})(MainPetugas);
