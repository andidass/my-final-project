import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  insertBantuanUtama,
  deleteBantuanUtama,
} from "../../../actions/setBantuanUtama";
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

const DataBantuanUtama = ({
  bantuanUtama: { bantuanUtama, loading },
  history,
  auth: { user },
  insertBantuanUtama,
  deleteBantuanUtama,
}) => {
  const [dataBantuanUtama, setDataBantuanUtama] = useState({
    jenisBantuan: "Utama",
    namaBarang: "",
  });

  const { jenisBantuan, namaBarang } = dataBantuanUtama;

  const changeHandler = (e) =>
    setDataBantuanUtama({ ...dataBantuanUtama, [e.target.id]: e.target.value });

  function submitHandler(event) {
    event.preventDefault();
    insertBantuanUtama(dataBantuanUtama, history);
    setDataBantuanUtama({
      jenisBantuan: "Utama",
      namaBarang: "",
    });
  }

  // hapus data pada tabel
  function deleteItem(id) {
    deleteBantuanUtama(id);
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
            Set Bantuan Utama
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
          dataBantuanUtama={bantuanUtama.dataBantuanUtama}
          deleteItem={deleteItem}
        />
      </div>
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
