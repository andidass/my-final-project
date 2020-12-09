import React, { useEffect } from "react";
import DataBantuanKeluar from "./DataBantuanKeluar";
import NoData from "./NoData";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBantuanKeluar } from "../../../actions/bantuanKeluar";
import Spinner from "../../../Components/Spinner";

const BantuanKeluar = ({
  bantuanKeluar: { bantuanKeluar, loading },
  getBantuanKeluar,
}) => {
  useEffect(() => {
    getBantuanKeluar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (bantuanKeluar === null && loading) {
    return <Spinner />;
  }
  return bantuanKeluar !== null ? <DataBantuanKeluar /> : <NoData />;
};

const mapStateToProps = (state) => ({
  bantuanKeluar: state.bantuanKeluar,
});

BantuanKeluar.propTypes = {
  bantuanKeluar: PropTypes.object.isRequired,
  getBantuanKeluar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getBantuanKeluar })(BantuanKeluar);
