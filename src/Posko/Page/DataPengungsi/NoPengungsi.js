import React, { Fragment } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPengungsi } from "../../../actions/pengungsi";
import { Button, Typography, Box, Grid, Paper } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const NoPengungsi = ({
  pengungsi: { pengungsi, loading },
  auth: { user },
  createPengungsi,
  history,
}) => {
  const onSubmit = (e) => {
    createPengungsi(history);
    e.preventDefault();
  };

  if (pengungsi) {
    return <Redirect to="/pos/data-pengungsi" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Data Pengungsi Pos</Typography>
        <Typography variant="subtitle2">Buat Data Pengungsi</Typography>
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
                <b>DATA PENGUNGSI POS</b>
              </Box>
              <Box fontSize={15} textAlign="center">
                Data pengungsi pos ini belum ada
              </Box>
            </Typography>
            <form type="submit" onSubmit={(e) => onSubmit(e)}>
              <Button
                variant="contained"
                className="button"
                color="primary"
                type="submit"
                style={{ margin: 8, maxWidth: 500 }}
                startIcon={<PersonIcon />}
              >
                Buat Data Pengungsi Pos
              </Button>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
};

NoPengungsi.propTypes = {
  auth: PropTypes.object.isRequired,
  createPengungsi: PropTypes.func.isRequired,
  pengungsi: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps, { createPengungsi })(
  withRouter(NoPengungsi)
);
