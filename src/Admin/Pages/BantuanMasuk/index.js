import React, { useEffect } from "react";
import DataBantuanMasuk from "./DataBantuanMasuk";
import NoData from "./NoData";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBantuanMasuk } from "../../../actions/bantuanMasuk";
import FormBantuanMasuk from "./FormBantuanMasuk";
import Spinner from "../../../Components/Spinner";

const BantuanMasuk = ({
  bantuanMasuk: { bantuanMasuk, loading },
  getBantuanMasuk,
}) => {
  useEffect(() => {
    getBantuanMasuk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (bantuanMasuk === null && loading) {
    return <Spinner />;
  }
  if (bantuanMasuk && bantuanMasuk.dataBantuanMasuk.length === 0) {
    return <FormBantuanMasuk />;
  }
  return bantuanMasuk !== null ? <DataBantuanMasuk /> : <NoData />;
};

const mapStateToProps = (state) => ({
  bantuanMasuk: state.bantuanMasuk,
});

BantuanMasuk.propTypes = {
  bantuanMasuk: PropTypes.object.isRequired,
  getBantuanMasuk: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getBantuanMasuk })(BantuanMasuk);
