import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DataPermintaanBantuan from "./DataPermintaanBantuan";
import NoDataPermintaanBantuan from "./NoDataPermintaanBantuan";
import { Redirect } from "react-router-dom";

const PermintaanBantuan = ({
  auth: { user },
  permintaanBantuan: { permintaanBantuan },
}) => {
  if (!user) {
    return <Redirect to="/posko/login" />;
  }
  return permintaanBantuan !== null ? (
    <DataPermintaanBantuan />
  ) : (
    <NoDataPermintaanBantuan />
  );
};

PermintaanBantuan.propTypes = {
  permintaanBantuan: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  permintaanBantuan: state.permintaanBantuan,
});

export default connect(mapStateToProps)(PermintaanBantuan);
