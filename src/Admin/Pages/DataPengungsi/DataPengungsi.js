import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Tabel from "./Tabel";
import "./DataPengungsi.css";

import {
  Grid,
  Typography,
  TextField,
  Paper,
  Button,
  Box,
} from "@material-ui/core";

const DataBantuanUtama = ({
  pengungsi: { semuaPengungsi, loading },
  auth: { user },
}) => {
  const [cariData, setCariData] = useState({
    kataPencarian: "",
  });

  const { kataPencarian } = cariData;

  const changeHandler = (e) =>
    setCariData({ ...cariData, [e.target.id]: e.target.value });

  function submitHandler(event) {
    event.preventDefault();
    setCariData({
      kataPencarian: "",
    });
  }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Data pengungsi</Typography>
        <Typography variant="subtitle2">
          Data semua pengungsi di seluruh posko pengungsian
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/admin/dashboard">Kembali</Link>
      </Button>

      <Paper variant="outlined" className="body-posko-bencana">
        <Grid container justify="center">
          <Grid item>
            <form type="submit" onSubmit={submitHandler}>
              <div className="search">
                <TextField
                  id="kataPencarian"
                  placeholder="cari pengungsi"
                  style={{ minWidth: 300 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  autoFocus
                  onChange={(e) => changeHandler(e)}
                  value={kataPencarian}
                />
              </div>
              <Alert />
            </form>
          </Grid>
        </Grid>
        <Typography component="div">
          <Box
            fontWeight="fontWeightBold"
            textAlign="center"
            fontSize={18}
            marginTop={5}
          >
            Daftar Pengungsi
          </Box>
        </Typography>
        {semuaPengungsi.map((data) => (
          <Tabel pengungsi={data.allPengungsi} user={data.user} />
        ))}
      </Paper>
      {/* <Tabel pengungsi={pengungsi[0].allPengungsi} user={user} /> */}
      {/* <Tabel pengungsi={pengungsi} /> */}
    </Fragment>
  );
};

DataBantuanUtama.propTypes = {
  auth: PropTypes.object.isRequired,
  pengungsi: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps)(DataBantuanUtama);
