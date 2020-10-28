import React, { useEffect } from "react";
import MenuPosko from "../Components/MenuPosko";

import { getCurrentProfile } from "../../actions/profile";
import Alert from "../../layout/Alert";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../../Components/Spinner";
import { Typography, Box } from "@material-ui/core";

const MainPosko = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  // setTimeout(() => {
  //   getCurrentProfile();
  // }, 1000);}

  useEffect(() => {
    setTimeout(() => {
      getCurrentProfile();
    }, 500);
  }, [getCurrentProfile]);

  return loading && profile === null ? (
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
      <MenuPosko />
    </div>
  );
};

MainPosko.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(MainPosko);
