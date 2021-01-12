import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBantuanUtama } from "../../../actions/setBantuanUtama";
import DataBantuanUtama from "./DataBantuanUtama";
import NoData from "./NoData";
import Spinner from "../../../Components/Spinner";
import { Redirect } from "react-router-dom";

const BantuanUtama = ({
  auth: { user },
  bantuanUtama: { bantuanUtama, loading },
  getBantuanUtama,
}) => {
  useEffect(() => {
    getBantuanUtama();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!user) {
    return <Redirect to="/admin/login" />;
  }
  return loading ? (
    <Spinner />
  ) : bantuanUtama !== null ? (
    <DataBantuanUtama />
  ) : (
    <NoData />
  );
};

BantuanUtama.propTypes = {
  getBantuanUtama: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  bantuanUtama: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanUtama: state.bantuanUtama,
});

export default connect(mapStateToProps, { getBantuanUtama })(BantuanUtama);
