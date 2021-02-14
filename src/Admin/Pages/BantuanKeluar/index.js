import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import DataBantuanKeluar from "./DataBantuanKeluar";
import NoData from "./NoData";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBantuanKeluar } from "../../../actions/bantuanKeluar";
import { getBantuanUtama } from "../../../actions/setBantuanUtama";
import FormBantuanKeluar from "./FormBantuanKeluar";
import Spinner from "../../../Components/Spinner";

const BantuanKeluar = ({
  bantuanKeluar: { bantuanKeluar, loading },
  getBantuanKeluar,
  getBantuanUtama,
  auth: { user },
}) => {
  useEffect(() => {
    getBantuanKeluar();
    getBantuanUtama();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return <Redirect to="/admin/dashboard" />;
  }

  if (bantuanKeluar && bantuanKeluar.dataBantuanKeluar.length === 0) {
    return <FormBantuanKeluar />;
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
  getBantuanUtama: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getBantuanKeluar, getBantuanUtama })(
  BantuanKeluar
);
