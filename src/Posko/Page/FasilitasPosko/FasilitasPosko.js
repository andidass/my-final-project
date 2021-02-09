import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { getDataFasilitasPosko } from "../../../actions/fasilitasPosko";
import DataFasilitasPosko from "./DataFasilitasPosko";
import NoDataFasilitasPosko from "./NoDataFasilitasPosko";
import Spinner from "../../../Components/Spinner";

const FasilitasPosko = ({
  auth: { isAuthenticated },
  fasilitasPosko: { fasilitasPosko, loading },
  getDataFasilitasPosko,
}) => {
  useEffect(() => {
    getDataFasilitasPosko();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/pos/dashboard" />;
  }
  return loading ? <Spinner /> : <DataFasilitasPosko />;
};

FasilitasPosko.propTypes = {
  getDataFasilitasPosko: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  fasilitasPosko: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  fasilitasPosko: state.fasilitasPosko,
});

export default connect(mapStateToProps, { getDataFasilitasPosko })(
  FasilitasPosko
);
