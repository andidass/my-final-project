import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllDataPengungsi } from "../../../actions/pengungsi";
import DataPengungsi from "./DataPengungsi";

const AllDataPengungsi = ({ getAllDataPengungsi }) => {
  useEffect(() => {
    getAllDataPengungsi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <DataPengungsi />;
};

AllDataPengungsi.propTypes = {
  getAllDataPengungsi: PropTypes.func.isRequired,
};

export default connect(null, { getAllDataPengungsi })(AllDataPengungsi);
