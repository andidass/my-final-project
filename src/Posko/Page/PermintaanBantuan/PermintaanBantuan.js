import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { getPermintaanBantuan } from "../../../actions/permintaanBantuan";
import DataPermintaanBantuan from "./DataPermintaanBantuan";
import NoDataPermintaanBantuan from "./NoDataPermintaanBantuan";

const PermintaanBantuan = ({
  auth: { isAuthenticated },
  permintaanBantuan: { permintaanBantuan },
  getPermintaanBantuan,
}) => {
  useEffect(() => {
    getPermintaanBantuan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/pos/dashboard" />;
  }

  return permintaanBantuan !== null ? (
    <DataPermintaanBantuan />
  ) : (
    <NoDataPermintaanBantuan />
  );
};

PermintaanBantuan.propTypes = {
  permintaanBantuan: PropTypes.object.isRequired,
  getPermintaanBantuan: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  permintaanBantuan: state.permintaanBantuan,
});

export default connect(mapStateToProps, { getPermintaanBantuan })(
  PermintaanBantuan
);
