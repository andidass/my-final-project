import React, { useEffect, Fragment } from "react";
import DataBantuanMasuk from "./DataBantuanMasuk";
import NoData from "./NoData";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBantuanMasuk } from "../../../actions/bantuanMasukPos";
import { getAllBantuanUtama } from "../../../actions/setBantuanUtama";
import FormBantuanMasuk from "./FormBantuanMasuk";
import Spinner from "../../../Components/Spinner";

const BantuanMasukPos = ({
  auth: { user },
  bantuanMasuk: { bantuanMasuk, loading },
  bantuanUtama: { bantuanUtama },
  getBantuanMasuk,
  getAllBantuanUtama,
}) => {
  useEffect(() => {
    getBantuanMasuk();
    getAllBantuanUtama();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return <Redirect to="/pos/dashboard" />;
  }

  if (bantuanMasuk && bantuanMasuk.dataBantuanMasuk.length === 0) {
    return <FormBantuanMasuk />;
  }

  return loading ? (
    <Spinner />
  ) : !bantuanMasuk ? (
    <NoData />
  ) : (
    <DataBantuanMasuk />
  );
};

const mapStateToProps = (state) => ({
  bantuanMasuk: state.bantuanMasuk,
  bantuanUtama: state.bantuanUtama,
  auth: state.auth,
});

BantuanMasukPos.propTypes = {
  bantuanMasuk: PropTypes.object.isRequired,
  bantuanUtama: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getBantuanMasuk: PropTypes.func.isRequired,
  getAllBantuanUtama: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getBantuanMasuk,
  getAllBantuanUtama,
})(BantuanMasukPos);
