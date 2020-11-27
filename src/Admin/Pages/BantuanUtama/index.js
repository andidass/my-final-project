import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DataBantuanUtama from "./DataBantuanUtama";
import NoData from "./NoData";
import { Redirect } from "react-router-dom";

const BantuanUtama = ({ auth: { user }, bantuanUtama: { bantuanUtama } }) => {
  if (!user) {
    return <Redirect to="/admin/login" />;
  }
  return bantuanUtama !== null ? <DataBantuanUtama /> : <NoData />;
};

BantuanUtama.propTypes = {
  auth: PropTypes.object.isRequired,
  bantuanUtama: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanUtama: state.bantuanUtama,
});

export default connect(mapStateToProps)(BantuanUtama);
