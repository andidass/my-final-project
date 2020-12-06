import React, { useEffect } from "react";
import BantuanMasukPosko from "./BantuanMasukPosko";
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
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return dataBantuanMasuk !== null ? <BantuanMasukPosko /> : <NoData />;
};

const mapStateToProps = (state) => ({
  bantuanMasuk: state.bantuanMasuk,
});

NoData.propTypes = {
  bantuanMasuk: PropTypes.object.isRequired,
  getBantuanMasuk: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getBantuanMasuk })(BantuanMasuk);
