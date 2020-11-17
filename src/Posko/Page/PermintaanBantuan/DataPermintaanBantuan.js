import React, { Fragment, useState, useEffect } from "react";
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

const DataPermintaanBantuan = ({
  permintaanBantuan: { permintaanBantuan, loading, error },
  history,
  insertPermintaanBantuan,
  deletePermintaanBantuan,
  auth: { user },
}) => {
  const [dataPermintaan, setDataPermintaan] = useState({
    jenisBantuan: "",
    namaBarang: "",
    satuan: "",
    banyaknya: "",
  });

  const changeHandler = (e) =>
    setDataPermintaan({ ...dataPermintaan, [e.target.id]: e.target.value });

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  function submitHandler(event) {
    event.preventDefault();
    insertPermintaanBantuan(dataPermintaan, history);
    // !loading && // ! tinggal sinkronkan saja, buat ini berjalan setelah function inserPengungsi selesai dipanggil
    // isEmpty(error) &&
    setDataPermintaan({
      jenisBantuan: "",
      namaBarang: "",
      satuan: "",
      banyaknya: "",
    });
  }

  // hapus data pada tabel
  function deleteItem(id) {
    deletePermintaanBantuan(id);
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
            Permintaan Bantuan {user.name}
          </Box>
        </Typography>
        <Paper variant="outlined" className="body-posko-bencana">
          <Grid container>
            <Grid xs={1} sm={3} item />
            <Grid xs={10} sm={6} item>
              <form type="submit">
                <TextField
                  id="jenisBantuan"
                  label="Jenis Barang"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={dataPermintaan.jenisBantuan}
                />
                <TextField
                  id="namaBarang"
                  label="Nama Barang"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={dataPermintaan.namaBarang}
                />
                <TextField
                  id="satuan"
                  label="Satuan"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={dataPermintaan.satuan}
                />
                <TextField
                  id="banyaknya"
                  label="Banyaknya"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={dataPermintaan.banyaknya}
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
        <Tabel
          allPengungsi={permintaanBantuan.dataPermintaanBantuan}
          deleteItem={deleteItem}
        />
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
