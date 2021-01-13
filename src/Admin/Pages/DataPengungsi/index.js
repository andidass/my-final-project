import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { getAllDataPengungsi } from "../../../actions/pengungsi";
import DataPengungsi from "./DataPengungsi";
import Spinner from "../../../Components/Spinner";

const AllDataPengungsi = ({
  getAllDataPengungsi,
  pengungsi: { loading },
  auth: { user },
}) => {
  useEffect(() => {
    getAllDataPengungsi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return <Redirect to="/admin/login" />;
  }

  return loading ? <Spinner /> : <DataPengungsi />;
};

AllDataPengungsi.propTypes = {
  getAllDataPengungsi: PropTypes.func.isRequired,
  pengungsi: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  pengungsi: state.pengungsi,
  auth: state.auth,
});

export default connect(mapStateToProps, { getAllDataPengungsi })(
  AllDataPengungsi
);
