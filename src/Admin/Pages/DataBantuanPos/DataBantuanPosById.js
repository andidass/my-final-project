import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBantuanMasukById } from "../../../actions/bantuanMasukPos";
import { getBantuanKeluarById } from "../../../actions/bantuanKeluarPos";
// import TabelDataBantuan from "./TableDataBantuan";
import Tabs from "./Tabs";

import { Typography, Button } from "@material-ui/core";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const DataBantuanPosById = ({
  match,
  getBantuanMasukById,
  getBantuanKeluarById,
  bantuanMasuk: { bantuanMasuk },
  bantuanKeluar: { bantuanKeluar, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getBantuanMasukById(match.params.id);
    getBantuanKeluarById(match.params.id);
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Data Bantuan Masuk dan Keluar</Typography>
        <Typography variant="subtitle2">
          List Data Bantuan Masuk dan Keluar Pos
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
      <div className="data-bantuan">
        {bantuanMasuk && (
          <Fragment>
            <Tabs
              rows={bantuanMasuk && bantuanMasuk.dataBantuanMasuk}
              rows2={bantuanKeluar && bantuanKeluar.dataBantuanKeluar}
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  bantuanMasuk: state.bantuanMasuk,
  bantuanKeluar: state.bantuanKeluar,
  auth: state.auth,
});

DataBantuanPosById.propTypes = {
  getBantuanMasukById: PropTypes.func.isRequired,
  getBantuanKeluarById: PropTypes.func.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
  bantuanKeluar: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getBantuanMasukById,
  getBantuanKeluarById,
})(DataBantuanPosById);
