import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { createPermintaanBantuan } from "../../../actions/permintaanBantuan";
import { Button, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Spinner from "../../../Components/Spinner";

const NoData = ({
  bantuanUtama: { bantuanUtama, loading },
  auth: { user },
  createPermintaanBantuan,
}) => {
  const onSubmit = (e) => {
    // createPermintaanBantuan();
    e.preventDefault();
  };

  if (bantuanUtama) {
    return <Redirect to="/admin/bantuan-utama" />;
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
        Buat Data Bantuan Utama
      </Button>
    </form>
  );
};

NoData.propTypes = {
  auth: PropTypes.object.isRequired,
  bantuanUtama: PropTypes.object.isRequired,
  // createPermintaanBantuan: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanUtama: state.bantuanUtama,
});

export default connect(mapStateToProps)(withRouter(NoData));
