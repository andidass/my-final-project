import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import NoProfile from "./NoProfile";
import ProfilePosko from "./ProfilePosko";

import "./PoskoBencana.css";
const PoskoBencana = ({ auth: { user }, profile: { profile } }) => {
  if (!user) {
    return <Redirect to="/posko/login" />;
  }
  return profile !== null ? <ProfilePosko /> : <NoProfile />;
};

PoskoBencana.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps)(PoskoBencana);
