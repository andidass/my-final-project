import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createBantuanUtama } from "../../../actions/setBantuanUtama";
import { Button, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Spinner from "../../../Components/Spinner";

const NoData = ({
  bantuanUtama: { bantuanUtama, loading },
  auth: { user },
  createBantuanUtama,
  history,
}) => {
  const onSubmit = (e) => {
    createBantuanUtama(history);
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
          Data Bantuan Utama Tidak ada
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
  createBantuanUtama: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanUtama: state.bantuanUtama,
});

export default connect(mapStateToProps, { createBantuanUtama })(
  withRouter(NoData)
);
