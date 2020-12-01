import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  insertPermintaanBantuan,
  deletePermintaanBantuan,
} from "../../../actions/permintaanBantuan";
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

const jenisBantuan2 = [
  {
    value: "Utama",
    label: "Utama",
  },
  {
    value: "Sandang",
    label: "Sandang",
  },
  {
    value: "Pangan",
    label: "Pangan",
  },
  {
    value: "Papan",
    label: "Papan",
  },
  {
    value: "Uang",
    label: "Uang",
  },
];

const DataPermintaanBantuan = ({
  permintaanBantuan: { permintaanBantuan, loading },
  history,
  insertPermintaanBantuan,
  deletePermintaanBantuan,
  auth: { user },
}) => {
  const [dataPermintaan, setDataPermintaan] = useState({
    jenisBantuan: "Utama",
    namaBarang: "",
    satuan: "",
    banyaknya: "",
  });

  const { jenisBantuan, namaBarang, satuan, banyaknya } = dataPermintaan;
  const [show, setShow] = useState(false);

  const changeHandler = (e) =>
    setDataPermintaan({ ...dataPermintaan, [e.target.id]: e.target.value });

  function submitHandler(event) {
    event.preventDefault();
    insertPermintaanBantuan(dataPermintaan, history);
    setDataPermintaan({
      jenisBantuan: "Utama",
      namaBarang: "",
      satuan: "",
      banyaknya: "",
    });
  }

  // hapus data pada tabel
  function deleteItem(id) {
    deletePermintaanBantuan(id);
  }

  const handleClick = () => {
    setShow(!show);
  };

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
            Permintaan Bantuan {user && user.name}
          </Box>
        </Typography>
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
                          id="jenisBantuan"
                          label="Jenis Barang"
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
                          value={jenisBantuan}
                        >
                          {jenisBantuan2.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                      </div>
                      <TextField
                        id="namaBarang"
                        label="Nama Barang"
                        style={{ maxWidth: 300 }}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        size="small"
                        autoFocus
                        required
                        onChange={(e) => changeHandler(e)}
                        value={namaBarang}
                      />
                      <TextField
                        id="satuan"
                        label="Satuan"
                        style={{ maxWidth: 300 }}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        size="small"
                        required
                        onChange={(e) => changeHandler(e)}
                        value={satuan}
                      />
                      <TextField
                        id="banyaknya"
                        label="Banyaknya"
                        type="number"
                        style={{ maxWidth: 300 }}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        size="small"
                        placeholder="banyaknya barang isi dengan angka"
                        required
                        onChange={(e) => changeHandler(e)}
                        value={banyaknya}
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
          {permintaanBantuan.dataPermintaanBantuan.length > 0 ? (
            <Tabel
              allPengungsi={permintaanBantuan.dataPermintaanBantuan}
              deleteItem={deleteItem}
            />
          ) : (
            <div className="no-data">
              <Typography variant="subtitle1">
                Data Bantuan Utama Kosong
              </Typography>
            </div>
          )}
        </Paper>
      </div>
    </Fragment>
  );
};

DataPermintaanBantuan.propTypes = {
  insertPermintaanBantuan: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  permintaanBantuan: PropTypes.object.isRequired,
  deletePermintaanBantuan: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  permintaanBantuan: state.permintaanBantuan,
});

export default connect(mapStateToProps, {
  insertPermintaanBantuan,
  deletePermintaanBantuan,
})(withRouter(DataPermintaanBantuan));
