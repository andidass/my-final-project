import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import DataBantuanKeluar from "./DataBantuanKeluar";
import NoData from "./NoData";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBantuanKeluar } from "../../../actions/bantuanKeluar";
import Spinner from "../../../Components/Spinner";

const BantuanKeluar = ({
  bantuanKeluar: { bantuanKeluar, loading },
  getBantuanKeluar,
  auth: { user },
}) => {
  useEffect(() => {
    getBantuanKeluar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return <Redirect to="/admin/dashboard" />;
  }

  return loading ? (
    <Spinner />
  ) : !bantuanKeluar ? (
    <NoData />
  ) : (
    <DataBantuanKeluar />
  );
};

const mapStateToProps = (state) => ({
  bantuanKeluar: state.bantuanKeluar,
  auth: state.auth,
});

BantuanKeluar.propTypes = {
  bantuanKeluar: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getBantuanKeluar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getBantuanKeluar })(BantuanKeluar);
