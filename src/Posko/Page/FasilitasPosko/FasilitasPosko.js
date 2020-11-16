import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DataFasilitasPosko from "./DataFasilitasPosko";
import NoDataFasilitasPosko from "./NoDataFasilitasPosko";
import { Redirect } from "react-router-dom";

const FasilitasPosko = ({
  auth: { user },
  fasilitasPosko: { fasilitasPosko },
}) => {
  if (!user) {
    return <Redirect to="/posko/login" />;
  }
  return fasilitasPosko !== null ? (
    <DataFasilitasPosko />
  ) : (
    <NoDataFasilitasPosko />
  );
};

FasilitasPosko.propTypes = {
  auth: PropTypes.object.isRequired,
  fasilitasPosko: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  fasilitasPosko: state.fasilitasPosko,
});

export default connect(mapStateToProps)(FasilitasPosko);
