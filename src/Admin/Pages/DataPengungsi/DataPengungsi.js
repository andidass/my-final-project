import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";

import Tabel from "./Tabel";

import {
  Grid,
  Typography,
  Box,
  TextField,
  Paper,
  Button,
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
      <div className="isi">
        <Typography component="div">
          <Box
            fontSize={18}
            fontWeight="fontWeightBold"
            textAlign="center"
            marginTop={3}
          >
            Data Pengungsi
          </Box>
        </Typography>
        <Paper variant="outlined" className="body-posko-bencana">
          <Grid container>
            <Grid xs={1} sm={3} item />
            <Grid xs={10} sm={6} item>
              <form type="submit" onSubmit={submitHandler}>
                <TextField
                  id="kataPencarian"
                  placeholder="cari pengungsi"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  autoFocus
                  required
                  onChange={(e) => changeHandler(e)}
                  value={kataPencarian}
                />
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  style={{ margin: 8 }}
                  // onClick={submitHandler}
                >
                  Cari
                </Button>
                <Alert />
              </form>
            </Grid>
            <Grid xs={1} sm={3} item />
          </Grid>
          {semuaPengungsi.map((data) => (
            <Tabel pengungsi={data.allPengungsi} user={data.user} />
          ))}
        </Paper>
        {/* <Tabel pengungsi={pengungsi[0].allPengungsi} user={user} /> */}
        {/* <Tabel pengungsi={pengungsi} /> */}
      </div>
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
