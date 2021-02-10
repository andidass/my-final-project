import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TableBantuanKeluar from "./TableBantuanKeluar";
import Spinner from "../../../Components/Spinner";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import "./BantuanKeluar.css";

const DataBantuanKeluar = ({ bantuanKeluar: { bantuanKeluar, loading } }) => {
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Data Bantuan Keluar</Typography>
        <Typography variant="subtitle2">List Data Bantuan Keluar</Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/pos/dashboard">Kembali</Link>
      </Button>
      <div className="data-bantuan">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          size="small"
          style={{ margin: 8 }}
        >
          <Link style={{ color: "white" }} to="/pos/bantuan-keluar/input">
            Input Data Bantuan Keluar
          </Link>
        </Button>
        <TableBantuanKeluar
          rows={bantuanKeluar && bantuanKeluar.dataBantuanKeluar}
        />
      </div>
    </Fragment>
  );
};

DataBantuanKeluar.propTypes = {
  auth: PropTypes.object.isRequired,
  bantuanKeluar: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanKeluar: state.bantuanKeluar,
});
export default connect(mapStateToProps)(DataBantuanKeluar);
