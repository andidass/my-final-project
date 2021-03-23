import React, { Fragment, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllAccountsPos } from "../../../actions/auth";
import Alert from "../../../layout/Alert";
import TabelAkunPetugas from "./TabelAkunPetugas";
import { Typography, Button } from "@material-ui/core";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const ListAkunPos = ({
  auth: { user },
  getAllAccountsPos,
  accounts: { accounts, loading },
}) => {
  useEffect(() => {
    getAllAccountsPos();
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
        <Typography variant="h5">Daftar Akun Pos</Typography>
        <Typography variant="subtitle2">
          List Data Akun Pos Pengungsian
        </Typography>
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
        <Link style={{ color: "white" }} to="/admin/registrasi-akun/pos">
          Buat Akun Baru Pos Pengungsian
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

ListAkunPos.propTypes = {
  getAllAccountsPos: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  accounts: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getAllAccountsPos })(ListAkunPos);
