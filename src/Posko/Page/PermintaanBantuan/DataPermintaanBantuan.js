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
              <form type="submit" onSubmit={submitHandler}>
                <TextField
                  id="jenisBantuan"
                  label="Jenis Barang"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  required
                  select
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
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
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  autoFocus
                  required
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={namaBarang}
                />
                <TextField
                  id="satuan"
                  label="Satuan"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={satuan}
                />
                <TextField
                  id="banyaknya"
                  label="Banyaknya"
                  type="number"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  placeholder="banyaknya barang isi dengan angka"
                  required
                  fullWidth
                  onChange={(e) => changeHandler(e)}
                  value={banyaknya}
                />
                <Alert />
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  style={{ margin: 8 }}
                  // onClick={submitHandler}
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
