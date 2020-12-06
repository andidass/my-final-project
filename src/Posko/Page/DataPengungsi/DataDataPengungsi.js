import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { insertPengungsi, deletePengungsi } from "../../../actions/pengungsi";
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

const jenisKelamin = [
  {
    value: "Laki-laki",
    label: "Laki-laki",
  },
  {
    value: "Perempuan",
    label: "Perempuan",
  },
];

const keadaan = [
  {
    value: "Sehat",
    label: "Sehat",
  },
  {
    value: "Luka-luka",
    label: "Luka-luka",
  },
];

const DataDataPengungsi = ({
  pengungsi: { pengungsi, loading, error },
  history,
  insertPengungsi,
  deletePengungsi,
  auth: { user },
}) => {
  const [dataPengungsi, setDataPengungsi] = useState({
    namaPengungsi: "",
    jenisKelamin: "Laki-laki",
    umur: "",
    keadaan: "Sehat",
    alamat: "",
  });

  const changeHandler = (e) =>
    setDataPengungsi({ ...dataPengungsi, [e.target.id]: e.target.value });

  function submitHandler(event) {
    event.preventDefault();
    insertPengungsi(dataPengungsi, history);
    setDataPengungsi({
      namaPengungsi: "",
      jenisKelamin: "Laki-laki",
      umur: "",
      keadaan: "Sehat",
      alamat: "",
    });
  }
  // hapus data pada tabel
  function deleteItem(id) {
    deletePengungsi(id);
  }

  return pengungsi && loading ? (
    <Spinner />
  ) : (
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
            <form type="submit" onSubmit={submitHandler}>
              <TextField
                id="namaPengungsi"
                label="Nama Pengungsi"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                required
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
                required
                fullWidth
                select
                SelectProps={{
                  native: true,
                }}
                onChange={(e) => changeHandler(e)}
                value={dataPengungsi.jenisKelamin}
              >
                {jenisKelamin.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="keadaan"
                label="Keadaan"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                required
                select
                SelectProps={{
                  native: true,
                }}
                onChange={(e) => changeHandler(e)}
                value={dataPengungsi.keadaan}
              >
                {keadaan.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="umur"
                label="Umur"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                type="number"
                required
                fullWidth
                onChange={(e) => changeHandler(e)}
                value={dataPengungsi.umur}
              />
              <TextField
                id="alamat"
                label="Alamat"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                required
                fullWidth
                onChange={(e) => changeHandler(e)}
                value={dataPengungsi.alamat}
              />
              <Alert />
              <Button
                variant="contained"
                color="primary"
                style={{ margin: 8 }}
                type="submit"
              >
                Tambah
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                style={{ margin: 8 }}
              >
                <Link to="/posko/dashboard">Kembali</Link>
              </Button>
            </form>
          </Grid>
          <Grid xs={1} sm={3} item />
        </Grid>
      </Paper>
      <Tabel
        allPengungsi={pengungsi && pengungsi.allPengungsi}
        deleteItem={deleteItem}
      />
    </div>
  );
};

DataDataPengungsi.propTypes = {
  insertPengungsi: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  pengungsi: PropTypes.object.isRequired,
  deletePengungsi: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps, {
  insertPengungsi,
  deletePengungsi,
})(withRouter(DataDataPengungsi));
