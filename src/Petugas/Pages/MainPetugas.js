import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import MenuPetugas from "../Components/MenuPetugas";
import { getCurrentProfile } from "../../actions/profilePetugas";
import Alert from "../../layout/Alert";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../../Components/Spinner";
import { Typography, Box, Button } from "@material-ui/core";

const MainPetugas = ({ auth: { user }, getCurrentProfile }) => {
  useEffect(() => {
    getCurrentProfile();
  });
  const Click = (e) => {
    e.preventDefault();
    console.log(user.session);
    if (user.session) {
      return <Redirect to="/error" />;
      // console.log("salah");
    }
  };
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
      <Button onClick={Click}>Show state</Button>
      <MenuPetugas />
    </div>
  );
};

MainPetugas.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(MainPetugas);
