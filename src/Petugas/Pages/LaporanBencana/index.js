import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import DataBencana from "./DataBencana";
// import FormKB from "./FormKB";
import Stepper from "./Stepper";
// import NoDataBencana from "./NoDataBencana";
// import { Redirect } from "react-router-dom";

const LaporanBencana = ({ auth: { user }, dataBencana: { dataBencana } }) => {
  // if (!user) {
  //   return <Redirect to="/petugas/login" />;
  // }
  return <Stepper />;
  // dataBencana !== null ? <DataBencana /> : <NoDataBencana />;
};

LaporanBencana.propTypes = {
  auth: PropTypes.object.isRequired,
  dataBencana: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  dataBencana: state.dataBencana,
});

export default connect(mapStateToProps)(LaporanBencana);
