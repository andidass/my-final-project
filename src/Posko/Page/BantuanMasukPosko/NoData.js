import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import { createBantuanMasuk } from "../../../actions/bantuanMasuk";
import Spinner from "../../../Components/Spinner";
import { Button, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const NoData = ({
  createBantuanMasuk,
  bantuanMasuk: { bantuanMasuk, loading },
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    createBantuanMasuk();
  };

  if (bantuanMasuk !== null) {
    return <Redirect to="/pos/bantuan-masuk" />;
  }

  return bantuanMasuk && loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Buat Data Bantuan Masuk</Typography>
        <Typography variant="subtitle2">Buar Data Bantuan Keluar</Typography>
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
            Data bantuan masuk posko ini belum ada.
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
          Buat Data Bantuan Masuk
        </Button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  bantuanMasuk: state.bantuanMasuk,
});

NoData.propTypes = {
  createBantuanMasuk: PropTypes.func.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  createBantuanMasuk,
})(NoData);
