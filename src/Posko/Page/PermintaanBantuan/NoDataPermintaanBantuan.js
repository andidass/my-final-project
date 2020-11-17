import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
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

  return loading ? (
    <Spinner />
  ) : (
    <div className="full-height isi">
      <Typography variant="h5">
        <Box fontSize={12} textAlign="left" marginTop={3}>
          Data permintaan bantuan posko ini belum ada.
        </Box>
      </Typography>
      <Button
        variant="contained"
        onClick={(e) => onSubmit(e)}
        color="primary"
        size="small"
        disableRipple
        component={Link}
        // to="/posko/permintaan-bantuan"
        startIcon={<PersonIcon />}
      >
        Buat Data Permintaan Bantuan
      </Button>
    </div>
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
