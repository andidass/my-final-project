import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllPermintaanBantuan } from "../../../actions/permintaanBantuan";

const AdminPermintaanBantuan = ({ getAllPermintaanBantuan }) => {
  useEffect(() => {
    getAllPermintaanBantuan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>semua data permintaan bantuan</div>;
};

AdminPermintaanBantuan.propTypes = {
  getAllPermintaanBantuan: PropTypes.func.isRequired,
};

export default connect(null, { getAllPermintaanBantuan })(
  AdminPermintaanBantuan
);
