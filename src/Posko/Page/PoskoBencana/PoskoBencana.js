import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import NoProfile from "./NoProfile";
import { getCurrentProfile } from "../../../actions/profile";
import ProfilePosko from "./ProfilePosko";

import "./PoskoBencana.css";
const PoskoBencana = ({
  auth: { user },
  profile: { profile },
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!user) {
    return <Redirect to="/posko/dashboard" />;
  }
  return profile !== null ? <ProfilePosko /> : <NoProfile />;
};

PoskoBencana.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(PoskoBencana);
