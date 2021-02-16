import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllDataBantuanMasuk } from "../../../actions/bantuanMasuk";
import { getAllDataBantuanKeluar } from "../../../actions/bantuanKeluar";
// import TabelDataBantuan from "./TableDataBantuan";
import Tabs from "./Tabs";

import { Typography, Button } from "@material-ui/core";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const DataBantuanPosko = ({
  getAllDataBantuanKeluar,
  getAllDataBantuanMasuk,
  bantuanMasuk: { semuaBantuanMasuk },
  bantuanKeluar: { semuaBantuanKeluar, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getAllDataBantuanKeluar();
    getAllDataBantuanMasuk();
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">
          Data Bantuan Masuk dan Keluar Gudang Utama
        </Typography>
        <Typography variant="subtitle2">
          List Data Bantuan Masuk dan Keluar Pos Di Gudang Utama (POSKO)
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        {!user ? (
          <Link to="/data-bantuan-pos">Kembali</Link>
        ) : (
          <Link to="/admin/data-bantuan-pos">Kembali</Link>
        )}
      </Button>
      {/* <div className="data-bantuan">
        {bantuanMasuk && (
          <Fragment>
            <Tabs
              rows={bantuanMasuk && bantuanMasuk.dataBantuanMasuk}
              rows2={bantuanKeluar && bantuanKeluar.dataBantuanKeluar}
            />
          </Fragment>
        )}
      </div> */}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  bantuanMasuk: state.bantuanMasuk,
  bantuanKeluar: state.bantuanKeluar,
  auth: state.auth,
});

DataBantuanPosko.propTypes = {
  getAllDataBantuanKeluar: PropTypes.func.isRequired,
  getAllDataBantuanMasuk: PropTypes.func.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
  bantuanKeluar: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getAllDataBantuanKeluar,
  getAllDataBantuanMasuk,
})(DataBantuanPosko);
