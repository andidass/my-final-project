import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentDataBencana } from "../../../actions/dataBencana";
import { Redirect } from "react-router-dom";
import MenuLaporanBencana from "./MenuLaporanBencana";
import NoDataBencana from "./NoDataBencana";
import Spinner from "../../../Components/Spinner";

const LaporanBencana = ({
  auth: { user, isAuthenticated },
  dataBencana: { dataBencana, loading },
  getCurrentDataBencana,
}) => {
  useEffect(() => {
    getCurrentDataBencana();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/petugas/login" />;
  }
  return loading ? (
    <Spinner />
  ) : dataBencana !== null ? (
    <MenuLaporanBencana />
  ) : (
    <NoDataBencana />
  );
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
})(LaporanBencana);
