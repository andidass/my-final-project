import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { getBantuanMasuk } from "../../../actions/bantuanMasuk";
import TabelBantuanMasuk from "./TableBantuanMasuk";
import Spinner from "../../../Components/Spinner";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import "./BantuanMasuk.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DataBantuanMasuk = ({
  getBantuanMasuk,
  bantuanMasuk: { bantuanMasuk, loading },
}) => {
  const classes = useStyles();
  useEffect(() => {
    getBantuanMasuk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Link to="/admin/dashboard">Kembali</Link>
      </Button>
      <div className="data-bantuan">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          size="small"
          style={{ margin: 8 }}
        >
          <Link style={{ color: "white" }} to="/admin/bantuan-masuk/input">
            Input Data Bantuan Masuk
          </Link>
        </Button>
        <TabelBantuanMasuk />
      </div>
    </Fragment>
  );
};

DataBantuanMasuk.propTypes = {
  getBantuanMasuk: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  getBantuanMasuk: state.bantuanMasuk,
  auth: state.auth,
  bantuanMasuk: state.bantuanMasuk,
});
export default connect(mapStateToProps, { getBantuanMasuk })(DataBantuanMasuk);
