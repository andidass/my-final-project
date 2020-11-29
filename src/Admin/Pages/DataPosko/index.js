import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DataPosko from "./DataPosko";

import { getAllDataPosko } from "../../../actions/profile.js";
import Spinner from "../../../Components/Spinner";

const AllDataPosko = ({ getAllDataPosko, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllDataPosko();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Posko</h1>
      <p>Data semua posko</p>
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <DataPosko key={profile._id} profile={profile} />
        ))
      ) : (
        <h4>Tidak Ada Profile Ditemukan...</h4>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

AllDataPosko.propTypes = {
  getAllDataPosko: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getAllDataPosko })(AllDataPosko);
