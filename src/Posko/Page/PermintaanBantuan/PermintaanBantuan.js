import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPermintaanBantuan } from "../../../actions/permintaanBantuan";
import DataPermintaanBantuan from "./DataPermintaanBantuan";
import NoDataPermintaanBantuan from "./NoDataPermintaanBantuan";
// import { Redirect } from "react-router-dom";

const PermintaanBantuan = ({
  auth: { user },
  permintaanBantuan: { permintaanBantuan },
  getPermintaanBantuan,
}) => {
  useEffect(() => {
    getPermintaanBantuan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // if (!user) {
  //   return <Redirect to="/posko/dashboard" />;
  // }
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
