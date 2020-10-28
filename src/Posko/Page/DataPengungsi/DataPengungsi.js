import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  insertPengungsi,
  getPengungsi,
  deletePengungsi,
} from "../../../actions/pengungsi";
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
import SaveIcon from "@material-ui/icons/Save";

// const jenisKelamin = [
//   {
//     value: "Laki-laki",
//     label: "Laki-laki",
//   },
//   {
//     value: "Wanita",
//     label: "Wanita",
//   },
// ];

const DataPengungsi = ({
  pengungsi: { pengungsi, loading },
  history,
  insertPengungsi,
  deletePengungsi,
  getPengungsi,
  auth: { user },
}) => {
  // get pengungsi
  useEffect(() => {
    getPengungsi();
  }, [getPengungsi]);

  const [dataPengungsi, setDataPengungsi] = useState({
    namaPengungsi: "",
    jenisKelamin: "",
    umur: "",
    keadaan: "",
    alamat: "",
  });

  const changeHandler = (e) =>
    setDataPengungsi({ ...dataPengungsi, [e.target.id]: e.target.value });

  function submitHandler(event) {
    insertPengungsi(dataPengungsi, history);

    // setDataPengungsi({
    //   namaPengungsi: "",
    //   jenisKelamin: "",
    //   umur: "",
    //   keadaan: "",
    //   alamat: "",
    // });
    event.preventDefault();
  }

  // hapus data pada tabel
  function deleteItem(id) {
    deletePengungsi(id);
    // console.log("delete!");
    // console.log(id);
    // setDataPengungsi((prevPengungsi) => {
    //   return prevPengungsi.filter((item, index) => {
    //     return index !== id;
    //   });
    // });
  }

  // return (
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
            Data Pengungsi Posko
          </Box>
        </Typography>
        <Paper variant="outlined" className="body-posko-bencana">
          <Grid container>
            <Grid xs={1} sm={3} item />
            <Grid xs={10} sm={6} item>
              <form type="submit">
                <TextField
                  id="namaPengungsi"
                  label="Nama Pengungsi"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={dataPengungsi.namaPengungsi}
                />
                <TextField
                  id="jenisKelamin"
                  label="Jenis Kelamin"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={dataPengungsi.jenisKelamin}
                />
                <TextField
                  id="umur"
                  label="Umur"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={dataPengungsi.umur}
                />
                <TextField
                  id="keadaan"
                  label="Keadaan"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={dataPengungsi.keadaan}
                />
                <TextField
                  id="alamat"
                  label="Alamat"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={dataPengungsi.alamat}
                />
                <Alert />
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  style={{ margin: 8 }}
                  onClick={submitHandler}
                >
                  Tambah
                </Button>
              </form>
            </Grid>
            <Grid xs={1} sm={3} item />
          </Grid>
        </Paper>
        <Tabel allPengungsi={pengungsi.allPengungsi} deleteItem={deleteItem} />
      </div>
    </Fragment>
  );
};

DataPengungsi.propTypes = {
  insertPengungsi: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  pengungsi: PropTypes.object.isRequired,
  getPengungsi: PropTypes.func.isRequired,
  deletePengungsi: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps, {
  insertPengungsi,
  getPengungsi,
  deletePengungsi,
})(withRouter(DataPengungsi));
