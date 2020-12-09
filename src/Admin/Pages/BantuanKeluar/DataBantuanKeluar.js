import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { getBantuanKeluar } from "../../../actions/bantuanKeluar";
import TableBantuanKeluar from "./TableBantuanKeluar";
import Spinner from "../../../Components/Spinner";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import "./BantuanKeluar.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DataBantuanKeluar = ({
  getBantuanKeluar,
  bantuanKeluar: { bantuanKeluar, loading },
}) => {
  const classes = useStyles();
  useEffect(() => {
    getBantuanKeluar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Link style={{ color: "white" }} to="/admin/bantuan-keluar/input">
            Input Data Bantuan Keluar
          </Link>
        </Button>
        <TableBantuanKeluar />
      </div>
    </Fragment>
  );
};

DataBantuanKeluar.propTypes = {
  getBantuanKeluar: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  bantuanKeluar: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  getBantuanKeluar: state.bantuanKeluar,
  auth: state.auth,
  bantuanKeluar: state.bantuanKeluar,
});
export default connect(mapStateToProps, { getBantuanKeluar })(
  DataBantuanKeluar
);
