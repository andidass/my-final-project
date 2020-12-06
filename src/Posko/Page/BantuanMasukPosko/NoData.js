import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { createBantuanMasuk } from "../../../actions/bantuanMasuk";
import Spinner from "../../../Components/Spinner";
import { Button, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const NoData = ({
  createBantuanMasuk,
  bantuanMasuk: { dataBantuanMasuk, loading },
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    createBantuanMasuk();
  };

  if (dataBantuanMasuk !== null) {
    return <Redirect to="/posko/bantuan-masuk" />;
  }

  return dataBantuanMasuk && loading ? (
    <Spinner />
  ) : (
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
