import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentDataBencana } from "../../../actions/dataBencana";
import { Redirect } from "react-router-dom";
// import DataBencana from "./DataBencana";
import Stepper from "./Stepper";
import MenuLaporanBencana from "./MenuLaporanBencana";
import NoDataBencana from "./NoDataBencana";

const LaporanBencana = ({
  auth: { user, isAuthenticated },
  dataBencana: { dataBencana },
  getCurrentDataBencana,
}) => {
  useEffect(() => {
    getCurrentDataBencana();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/petugas/login" />;
  }
  return dataBencana !== null ? <MenuLaporanBencana /> : <NoDataBencana />;
};

LaporanBencana.propTypes = {
  getCurrentDataBencana: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  dataBencana: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  dataBencana: state.dataBencana,
});

export default connect(mapStateToProps, {
  getCurrentDataBencana,
})(withRouter(LaporanBencana));
