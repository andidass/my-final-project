import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DataDataPengungsi from "./DataDataPengungsi";
import NoPengungsi from "./NoPengungsi";
import { Redirect } from "react-router-dom";

const DataPengungsi = ({ auth: { user }, pengungsi: { pengungsi } }) => {
  if (!user) {
    return <Redirect to="/posko/dashboard" />;
  }
  return pengungsi !== null ? <DataDataPengungsi /> : <NoPengungsi />;
};

DataPengungsi.propTypes = {
  pengungsi: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps)(DataPengungsi);
