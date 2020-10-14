import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NoProfile from "./NoProfile";
import FormProfile from "./FormPorfile";

import "./PoskoBencana.css";
const PoskoBencana = ({ auth: { user }, profile: { profile } }) => {
  return profile !== null ? <FormProfile /> : <NoProfile />;
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
