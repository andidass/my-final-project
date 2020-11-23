import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import NoProfile from "./NoProfile";
import DataProfilePetugas from "./DataProfilePetugas";

// import "./PoskoBencana.css";
const ProfilePetugas = ({ auth: { user }, profile: { profile } }) => {
  if (!user) {
    return <Redirect to="/petugas/login" />;
  }
  return profile !== null ? <DataProfilePetugas /> : <NoProfile />;
};

ProfilePetugas.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps)(ProfilePetugas);
