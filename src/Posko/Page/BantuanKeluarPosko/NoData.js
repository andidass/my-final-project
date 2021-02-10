import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import { createBantuanKeluar } from "../../../actions/bantuanKeluarPos";
import Spinner from "../../../Components/Spinner";
import { Button, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const NoData = ({
  createBantuanKeluar,
  bantuanKeluar: { bantuanKeluar, loading },
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    createBantuanKeluar();
  };

  if (bantuanKeluar !== null) {
    return <Redirect to="/pos/bantuan-keluar" />;
  }

  return bantuanKeluar && loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Buat Data Bantuan Keluar</Typography>
        <Typography variant="subtitle2">Buat Data Bantuan Keluar</Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/pos/dashboard">Kembali</Link>
      </Button>

      <form className="full-height isi" onSubmit={(e) => onSubmit(e)}>
        <Typography variant="h5">
          <Box fontSize={12} textAlign="left" marginTop={3}>
            Data bantuan keluar belum ada
          </Box>
        </Typography>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          size="small"
          disableRipple
          startIcon={<PersonIcon />}
        >
          Buat Data Bantuan Keluar
        </Button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  bantuanKeluar: state.bantuanKeluar,
});

NoData.propTypes = {
  createBantuanKeluar: PropTypes.func.isRequired,
  bantuanKeluar: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  createBantuanKeluar,
})(NoData);
