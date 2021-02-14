import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import FormProfile from "./FormPorfile";
import Spinner from "../../../Components/Spinner";
import { getCurrentProfile } from "../../../actions/profile";
import ProfilePosko from "./ProfilePosko";

import "./PoskoBencana.css";
const PoskoBencana = ({
  auth: { isAuthenticated },
  profile: { profile, loading },
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!isAuthenticated) {
    return <Redirect to="/pos/dashboard" />;
  }
  return loading ? (
    <Spinner />
  ) : profile !== null ? (
    <ProfilePosko />
  ) : (
    <FormProfile />
  );
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
