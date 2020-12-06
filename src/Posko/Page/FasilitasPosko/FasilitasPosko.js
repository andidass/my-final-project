import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDataFasilitasPosko } from "../../../actions/fasilitasPosko";
import DataFasilitasPosko from "./DataFasilitasPosko";
import NoDataFasilitasPosko from "./NoDataFasilitasPosko";
import { Redirect } from "react-router-dom";

const FasilitasPosko = ({
  auth: { user },
  fasilitasPosko: { fasilitasPosko },
  getDataFasilitasPosko,
}) => {
  useEffect(() => {
    getDataFasilitasPosko();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return <Redirect to="/posko/dashboard" />;
  }
  return fasilitasPosko !== null ? (
    <DataFasilitasPosko />
  ) : (
    <NoDataFasilitasPosko />
  );
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
