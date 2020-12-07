import React, { useEffect } from "react";
import FormBantuanMasuk from "./FormBantuanMasuk";
import NoData from "./NoData";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBantuanMasuk } from "../../../actions/bantuanMasuk";
import Spinner from "../../../Components/Spinner";

const BantuanMasuk = ({
  bantuanMasuk: { dataBantuanMasuk, loading },
  getBantuanMasuk,
}) => {
  useEffect(() => {
    getBantuanMasuk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (dataBantuanMasuk === null && loading) {
    return <Spinner />;
  }
  return dataBantuanMasuk !== null ? <FormBantuanMasuk /> : <NoData />;
};

const mapStateToProps = (state) => ({
  bantuanMasuk: state.bantuanMasuk,
});

NoData.propTypes = {
  bantuanMasuk: PropTypes.object.isRequired,
  getBantuanMasuk: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getBantuanMasuk })(BantuanMasuk);
