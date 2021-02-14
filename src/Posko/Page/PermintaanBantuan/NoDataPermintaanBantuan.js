import React, { Fragment } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPermintaanBantuan } from "../../../actions/permintaanBantuan";
import { Button, Typography, Box, Grid, Paper } from "@material-ui/core";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SaveIcon from "@material-ui/icons/Save";

const NoDataPermintaanBantuan = ({
  permintaanBantuan: { permintaanBantuan, loading },
  createPermintaanBantuan,
  history,
}) => {
  const onSubmit = (e) => {
    createPermintaanBantuan(history);
    e.preventDefault();
  };

  if (permintaanBantuan) {
    return <Redirect to="/pos/permintaan-bantuan" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Permintaan Bantuan</Typography>
        <Typography variant="subtitle2">
          Buat Data Permintaan Bantuan
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/pos/dashboard">Kembali</Link>
      </Button>

      <Grid container justify="center">
        <Paper variant="outlined" className="paper-form">
          <Grid item style={{ padding: `2rem` }}>
            <Typography component="div">
              <Box fontSize={17}>
                <b>PERMINTAAN BANTUAN</b>
              </Box>
              <Box fontSize={15} textAlign="center">
                Data permintaan pos ini belum ada
              </Box>
            </Typography>
            <form type="submit" onSubmit={(e) => onSubmit(e)}>
              <Button
                variant="contained"
                className="button"
                color="primary"
                type="submit"
                style={{ margin: 8, maxWidth: 500 }}
                startIcon={<SaveIcon />}
              >
                Buat Data Permintaan Bantuan
              </Button>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
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
