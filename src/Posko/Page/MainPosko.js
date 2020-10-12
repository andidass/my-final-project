import React, { Fragment, useEffect } from "react";
import MenuPosko from "../Components/MenuPosko";

import { getCurrentProfile } from "../../actions/profile";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../../Components/Spinner";
import { Typography, Box } from "@material-ui/core";

const MainPosko = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  // this should be executed after loading from user_loaded === false
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="full-height">
        <Typography component="div">
          <Box
            textAlign="center"
            fontSize={20}
            fontWeight="fontWeightBold"
            marginTop={4}
            color="red"
          >
            welcome {user && user.name}
            {/* Posko 1 Desa A */}
          </Box>
        </Typography>
        {profile !== null ? (
          <Fragment>Profile ada</Fragment>
        ) : (
          <Fragment> profile tidak ada </Fragment>
        )}
        <MenuPosko />
      </div>
    </Fragment>
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
