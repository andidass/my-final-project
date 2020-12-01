import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  insertBantuanUtama,
  deleteBantuanUtama,
} from "../../../actions/setBantuanUtama";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Tabel from "./Tabel";
import "./DataBantuan.css";

import {
  Grid,
  Typography,
  Box,
  TextField,
  Paper,
  Button,
} from "@material-ui/core";

const jenisBantuan2 = [
  {
    value: "Sandang",
    label: "Sandang",
  },
  {
    value: "Pangan",
    label: "Pangan",
  },
  {
    value: "Pakaian",
    label: "Pakaian",
  },
  {
    value: "Sanitasi",
    label: "Sanitasi",
  },
  {
    value: "Peralatan",
    label: "Peralatan",
  },
];

const DataBantuanUtama = ({
  bantuanUtama: { bantuanUtama, loading },
  history,
  auth: { user },
  insertBantuanUtama,
  deleteBantuanUtama,
}) => {
  const [dataBantuanUtama, setDataBantuanUtama] = useState({
    jenisBantuan: "Pangan",
    namaBarang: "",
  });

  const { jenisBantuan, namaBarang } = dataBantuanUtama;
  const [show, setShow] = useState(false);

  const changeHandler = (e) =>
    setDataBantuanUtama({ ...dataBantuanUtama, [e.target.id]: e.target.value });

  function submitHandler(event) {
    event.preventDefault();
    insertBantuanUtama(dataBantuanUtama, history);
    setDataBantuanUtama({
      jenisBantuan: "Pangan",
      namaBarang: "",
    });
  }

  // hapus data pada tabel
  function deleteItem(id) {
    deleteBantuanUtama(id);
  }

  const handleClick = () => {
    setShow(!show);
  };

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Set Bantuan Utama</Typography>
        <Typography variant="subtitle2">
          Penentu Bantuan Utama Untuk Tiap Posko Pengungsian
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
            <form
              type="submit"
              onSubmit={submitHandler}
              className="form-bantuan"
            >
              {show ? (
                <Fragment>
                  <div className="item-bantuan">
                    <TextField
                      id="jenisBantuan"
                      label="Jenis Barang"
                      style={{ minWidth: 300 }}
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      select
                      SelectProps={{
                        native: true,
                      }}
                      onChange={(e) => changeHandler(e)}
                      value={jenisBantuan}
                    >
                      {jenisBantuan2.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    <TextField
                      id="namaBarang"
                      label="Nama Barang"
                      style={{ maxWidth: 300 }}
                      margin="normal"
                      variant="outlined"
                      size="small"
                      autoFocus
                      required
                      fullWidth
                      onChange={(e) => changeHandler(e)}
                      value={namaBarang}
                    />
                  </div>
                  <Alert />
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    style={{ margin: 8 }}
                  >
                    Tambah
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
            </form>
          </Grid>
        </Grid>
        <Tabel
          dataBantuanUtama={bantuanUtama.dataBantuanUtama}
          deleteItem={deleteItem}
        />
      </Paper>
    </Fragment>
  );
};

DataBantuanUtama.propTypes = {
  auth: PropTypes.object.isRequired,
  bantuanUtama: PropTypes.object.isRequired,
  insertBantuanUtama: PropTypes.func.isRequired,
  deleteBantuanUtama: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanUtama: state.bantuanUtama,
});

export default connect(mapStateToProps, {
  insertBantuanUtama,
  deleteBantuanUtama,
})(withRouter(DataBantuanUtama));
