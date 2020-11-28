import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllDataPosko } from "../../../actions/profile.js";

const AllDataPosko = ({ getAllDataPosko }) => {
  useEffect(() => {
    getAllDataPosko();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>semua data Posko</div>;
};

AllDataPosko.propTypes = {
  getAllDataPosko: PropTypes.func.isRequired,
};

export default connect(null, { getAllDataPosko })(AllDataPosko);
