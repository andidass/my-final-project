import React, { Fragment, useEffect } from "react";
import MenuPosko from "../Components/MenuPosko";
import { getCurrentProfile } from "../../actions/profile";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Typography, Box } from "@material-ui/core";

const MainPosko = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return (
    <Fragment>
      <div className="main-container">
        <Typography component="div">
          <Box
            textAlign="center"
            fontSize={20}
            fontWeight="fontWeightBold"
            marginTop={4}
            color="red"
          >
            Posko 1 Desa A
          </Box>
        </Typography>
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
