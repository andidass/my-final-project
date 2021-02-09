import React, { Fragment } from "react";
import { connect } from "react-redux";
import Alert from "../../../layout/Alert";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TabelBantuanMasuk from "./TableBantuanMasuk";
import Spinner from "../../../Components/Spinner";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import "./BantuanMasukPosko.css";

const DataBantuanMasuk = ({ bantuanMasuk: { bantuanMasuk, loading } }) => {
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Data Bantuan Masuk</Typography>
        <Typography variant="subtitle2">List Data Bantuan Masuk</Typography>
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
          <Link style={{ color: "white" }} to="/pos/bantuan-masuk/input">
            Input Data Bantuan Masuk
          </Link>
        </Button>
        <TabelBantuanMasuk
          rows={bantuanMasuk && bantuanMasuk.dataBantuanMasuk}
        />
      </div>
      <Alert />
    </Fragment>
  );
};

DataBantuanMasuk.propTypes = {
  auth: PropTypes.object.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanMasuk: state.bantuanMasuk,
});
export default connect(mapStateToProps)(DataBantuanMasuk);
