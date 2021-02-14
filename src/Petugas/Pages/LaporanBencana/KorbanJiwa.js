import React, { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "../../../layout/Alert";
import { insertKorban, deleteDataKorban } from "../../../actions/dataBencana";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CancelIcon from "@material-ui/icons/Cancel";

import Tabel from "./Tabel";

import {
  Grid,
  Typography,
  Box,
  TextField,
  Paper,
  Button,
} from "@material-ui/core";
import "./style.css";

const jenisKelamin2 = [
  {
    value: "Laki-laki",
    label: "Laki-laki",
  },
  {
    value: "Perempuan",
    label: "Perempuan",
  },
];

const keadaan2 = [
  {
    value: "Sehat",
    label: "Sehat",
  },
  {
    value: "Luka Ringan",
    label: "Luka Ringan",
  },
  {
    value: "Luka Berat",
    label: "Luka Berat",
  },
  {
    value: "Hilang",
    label: "Hilang",
  },
  {
    value: "Meninggal",
    label: "Meninggal",
  },
];

const DataKorban = ({
  dataBencana: {
    dataBencana: { dataKorban },
    loading,
  },
  insertKorban,
  deleteDataKorban,
  auth: { user, token },
}) => {
  const [korban, setKorban] = useState({
    namaPengungsi: "",
    jenisKelamin: "Laki-laki",
    umur: "",
    keadaan: "Sehat",
    alamat: "",
    ket: "",
  });

  const { namaPengungsi, jenisKelamin, umur, keadaan, alamat, ket } = korban;

  // const [dataKorbanNew, setDataKorbanNew] = useState([]); // data item
  function addItem(e) {
    e.preventDefault();
    insertKorban(korban);
    setKorban({
      namaPengungsi: "",
      jenisKelamin: "Laki-laki",
      umur: "",
      keadaan: "Sehat",
      alamat: "",
      ket: "",
    });
    console.log(korban);
  }

  const [show, setShow] = useState(false);

  const changeHandler = (e) =>
    setKorban({ ...korban, [e.target.id]: e.target.value });

  // hapus data pada tabel
  function deleteItem(id) {
    deleteDataKorban(id);
  }

  const handleClick = () => {
    setShow(!show);
  };

  if (token === null) {
    return <Redirect to="/petugas/login" />;
  }

  return (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Korban Jiwa</Typography>
        <Typography variant="subtitle2">Data Korban Jiwa</Typography>
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
          <Grid item>
            <Typography component="div">
              <Box fontSize={17}>
                <b>Data Korban Jiwa</b>
              </Box>
            </Typography>
            <form
              type="submit"
              onSubmit={(e) => addItem(e)}
              className="form-bantuan"
            >
              {show ? (
                <Fragment>
                  <div>
                    <TextField
                      id="namaPengungsi"
                      label="Nama Pengungsi"
                      style={{ maxWidth: 300 }}
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      fullWidth
                      onChange={(e) => changeHandler(e)}
                      value={namaPengungsi}
                    />
                  </div>
                  <div>
                    <TextField
                      id="jenisKelamin"
                      label="Jenis Kelamin"
                      style={{ maxWidth: 300 }}
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
                      value={jenisKelamin}
                    >
                      {jenisKelamin2.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="keadaan"
                      label="Keadaan"
                      style={{ maxWidth: 300 }}
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
                      value={keadaan}
                    >
                      {keadaan2.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="umur"
                      label="Umur"
                      style={{ maxWidth: 300 }}
                      margin="normal"
                      variant="outlined"
                      size="small"
                      type="number"
                      required
                      fullWidth
                      onChange={(e) => changeHandler(e)}
                      value={umur}
                    />
                  </div>
                  <div>
                    <TextField
                      id="alamat"
                      label="Alamat"
                      style={{ maxWidth: 300 }}
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      fullWidth
                      onChange={(e) => changeHandler(e)}
                      value={alamat}
                    />
                  </div>
                  <div>
                    <TextField
                      id="ket"
                      label="Keterangan"
                      style={{ maxWidth: 300 }}
                      margin="normal"
                      variant="outlined"
                      size="small"
                      fullWidth
                      onChange={(e) => changeHandler(e)}
                      value={ket}
                    />
                  </div>
                  <Alert />
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: 8 }}
                    type="submit"
                    startIcon={<AddCircleIcon />}
                  >
                    Tambah Pengungsi
                  </Button>
                </Fragment>
              ) : null}
              <Button
                variant="contained"
                color={show ? "secondary" : "primary"}
                style={{ margin: 8 }}
                onClick={handleClick}
                startIcon={show ? <CancelIcon /> : <AddCircleIcon />}
              >
                {show ? "Sembunyikan" : "Tambah"}
              </Button>
            </form>
          </Grid>

          {dataKorban.length > 0 ? (
            <Tabel rows={dataKorban} deleteItem={deleteItem} />
          ) : (
            <div className="no-data">
              <Typography variant="subtitle1">
                <img
                  src="/img/undraw_empty_xct9.svg"
                  alt="React Logo"
                  style={{ width: `40%` }}
                />
              </Typography>
            </div>
          )}
        </Paper>
      </Grid>
    </Fragment>
  );
};

DataKorban.propTypes = {
  insertKorban: PropTypes.func.isRequired,
  deleteDataKorban: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  dataBencana: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dataBencana: state.dataBencana,
});

export default connect(mapStateToProps, { insertKorban, deleteDataKorban })(
  DataKorban
);
