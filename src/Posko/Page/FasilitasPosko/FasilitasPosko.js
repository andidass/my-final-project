import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDataFasilitasPosko } from "../../../actions/fasilitasPosko";
import DataFasilitasPosko from "./DataFasilitasPosko";
import NoDataFasilitasPosko from "./NoDataFasilitasPosko";
import { Redirect, Link } from "react-router-dom";

const FasilitasPosko = ({
  auth: { user },
  fasilitasPosko: { fasilitasPosko },
  getDataFasilitasPosko,
}) => {
  useEffect(() => {
    getDataFasilitasPosko();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // if (!user) {
  //   return <Redirect to="/posko/dashboard" />;
  // }
  // return fasilitasPosko !== null ? (
  //   <DataFasilitasPosko />
  // ) : (
  //   <NoDataFasilitasPosko />
  // );
  return fasilitasPosko && <DataFasilitasPosko />;
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
