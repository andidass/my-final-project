import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { insertPengungsi, deletePengungsi } from "../../../actions/pengungsi";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Tabel from "./Tabel";

import { Grid, Typography, TextField, Paper, Button } from "@material-ui/core";

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
    value: "Luka Ringan",
    label: "Luka Ringan",
  },
  {
    value: "Luka Berat",
    label: "Luka Berat",
  },
];

const DataDataPengungsi = ({
  pengungsi: { pengungsi, loading },
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
  const [show, setShow] = useState(false);

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

  const handleClick = () => {
    setShow(!show);
  };

  return pengungsi && loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Data Pengungsi Pos</Typography>
        <Typography variant="subtitle2">
          Data Pengungsi pos {user && user.name}
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

      <div className="isi">
        <Paper variant="outlined" className="body-posko-bencana">
          <Grid container justify="center">
            <Grid item>
              <form
                type="submit"
                onSubmit={submitHandler}
                className="form-bantuan"
              >
                {show ? (
                  <Fragment>
                    <div className="item-bantuan">
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
                          value={dataPengungsi.namaPengungsi}
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
                          value={dataPengungsi.jenisKelamin}
                        >
                          {jenisKelamin.map((option) => (
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
                          value={dataPengungsi.keadaan}
                        >
                          {keadaan.map((option) => (
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
                          value={dataPengungsi.umur}
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
                          value={dataPengungsi.alamat}
                        />
                      </div>
                    </div>

                    <Button
                      variant="contained"
                      color="primary"
                      style={{ margin: 8 }}
                      type="submit"
                    >
                      Tambah Pengungsi
                    </Button>
                  </Fragment>
                ) : null}
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: 8 }}
                  onClick={handleClick}
                >
                  {show ? "Sembunyikan" : "Tambah Data"}
                </Button>
                <Alert />
              </form>
            </Grid>
          </Grid>

          {pengungsi.allPengungsi.length > 0 ? (
            <Tabel
              rows={pengungsi && pengungsi.allPengungsi}
              deleteItem={deleteItem}
            />
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
      </div>
    </Fragment>
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
