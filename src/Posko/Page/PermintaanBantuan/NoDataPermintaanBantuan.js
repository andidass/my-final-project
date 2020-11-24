import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPermintaanBantuan } from "../../../actions/permintaanBantuan";
import { Button, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Spinner from "../../../Components/Spinner";

const NoDataPermintaanBantuan = ({
  permintaanBantuan: { permintaanBantuan, loading },
  auth: { user },
  createPermintaanBantuan,
}) => {
  const onSubmit = (e) => {
    createPermintaanBantuan();
    e.preventDefault();
  };

  if (permintaanBantuan) {
    return <Redirect to="/posko/permintaan-bantuan" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <form className="full-height isi" onSubmit={(e) => onSubmit(e)}>
      <Typography variant="h5">
        <Box fontSize={12} textAlign="left" marginTop={3}>
          Data permintaan bantuan posko ini belum ada.
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
        Buat Data Permintaan Bantuan
      </Button>
    </form>
  );
};

NoDataPermintaanBantuan.propTypes = {
  auth: PropTypes.object.isRequired,
  createPermintaanBantuan: PropTypes.func.isRequired,
  permintaanBantuan: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  permintaanBantuan: state.permintaanBantuan,
});

export default connect(mapStateToProps, {
  createPermintaanBantuan,
})(withRouter(NoDataPermintaanBantuan));
