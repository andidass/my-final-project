import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { getCurrentProfile } from "../../../actions/profilePetugas";
import DataProfilePetugas from "./DataProfilePetugas";
import Spinner from "../../../Components/Spinner";

// import "./PoskoBencana.css";
const ProfilePetugas = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!user) {
    return <Redirect to="/petugas/login" />;
  }
  return loading ? <Spinner /> : <DataProfilePetugas />;
};

ProfilePetugas.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(ProfilePetugas);
