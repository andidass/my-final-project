import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllAccountsPetugas } from "../../../actions/authPetugas";
import Alert from "../../../layout/Alert";
import TabelAkunPetugas from "./TabelAkunPetugas";
import { Typography, Button } from "@material-ui/core";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Fragment } from "react";

const ListAkunPetugas = ({
  auth: { user },
  getAllAccountsPetugas,
  accounts: { accounts, loading },
}) => {
  useEffect(() => {
    getAllAccountsPetugas();
  }, []);

  if (!user) {
    return <Redirect to="/admin/dashboard" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Alert />
      <div className="sub-heading">
        <Typography variant="h5">Daftar Akun Petugas</Typography>
        <Typography variant="subtitle2">List Data Akun Petugas</Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/admin/registrasi-akun">Kembali</Link>
      </Button>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
        size="small"
        style={{ margin: 8 }}
      >
        <Link style={{ color: "white" }} to="/admin/registrasi-akun/petugas">
          Buat Akun Baru Petugas
        </Link>
      </Button>
      <div style={{ maxWidth: `90vw`, paddingLeft: `5vw`, paddingTop: `5vh` }}>
        {accounts.length > 0 && <TabelAkunPetugas allAccounts={accounts} />}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  accounts: state.accounts,
});

ListAkunPetugas.propTypes = {
  getAllAccountsPetugas: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  accounts: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getAllAccountsPetugas })(
  ListAkunPetugas
);
