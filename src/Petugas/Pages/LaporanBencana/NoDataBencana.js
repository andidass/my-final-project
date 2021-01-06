import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "../../../layout/Alert";
import { createDataBencana } from "../../../actions/dataBencana";
import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SaveIcon from "@material-ui/icons/Save";
import "./style.css";

const NoDataBencana = ({
  createDataBencana,
  history,
  //   dataBencana: { dataBencana, loading },
}) => {
  // posko
  const [data, setData] = useState({
    jenisBencana: "",
  });

  const { jenisBencana } = data;

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = (event) => {
    event.preventDefault();
    createDataBencana(data, history, true);
  };

  return (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Kejadian Bencana</Typography>
        <Typography variant="subtitle2">Data Kejadian Bencana</Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/petugas/data-bencana">Kembali</Link>
      </Button>

      <Grid container justify="center">
        <Paper variant="outlined" className="paper-form">
          <Grid item style={{ padding: `2rem` }}>
            <Typography component="div">
              <Box fontSize={17}>
                <b>KEJADIAN BENCANA</b>
              </Box>
            </Typography>
            <form type="submit" onSubmit={submitHandler}>
              <TextField
                name="jenisBencana"
                label="Jenis Bencana"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={jenisBencana}
              />
              <Alert />
              <div>
                <Button
                  variant="contained"
                  className="button"
                  color="primary"
                  type="submit"
                  style={{ margin: 8, maxWidth: 500 }}
                  startIcon={<SaveIcon />}
                >
                  Buat Data Bencana
                </Button>
              </div>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
};

NoDataBencana.propTypes = {
  createDataBencana: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  dataBencana: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dataBencana: state.dataBencana,
});

export default connect(mapStateToProps, { createDataBencana })(
  withRouter(NoDataBencana)
);
