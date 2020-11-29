import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getDataPoskoById } from "../../../actions/profile.js";
import Spinner from "../../../Components/Spinner";

const AllDataPosko = ({
  match,
  getDataPoskoById,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getDataPoskoById(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Posko by id</h1>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

AllDataPosko.propTypes = {
  getDataPoskoById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getDataPoskoById })(AllDataPosko);
