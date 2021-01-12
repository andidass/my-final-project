import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPengungsi } from "../../../actions/pengungsi";
import PropTypes from "prop-types";
import DataDataPengungsi from "./DataDataPengungsi";
import NoPengungsi from "./NoPengungsi";
import { Redirect } from "react-router-dom";
import Spinner from "../../../Components/Spinner";

const DataPengungsi = ({
  auth: { user },
  pengungsi: { pengungsi, loading },
  getPengungsi,
}) => {
  useEffect(() => {
    getPengungsi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!user) {
    return <Redirect to="/pos/dashboard" />;
  }
  return loading ? (
    <Spinner />
  ) : pengungsi !== null ? (
    <DataDataPengungsi />
  ) : (
    <NoPengungsi />
  );
};

DataPengungsi.propTypes = {
  pengungsi: PropTypes.object.isRequired,
  getPengungsi: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps, { getPengungsi })(DataPengungsi);
