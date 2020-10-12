import React, { useState } from "react";

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

const DataPengungsi = () => {
  const [dataPengungsi, setDataPengungsi] = useState([]);

  const [Pengungsi, setPengungsi] = useState({
    namaPengungsi: "",
    jenisKelamin: "",
    umur: "",
    keadaan: "",
    alamat: "",
  });

  function changeHandler(event) {
    const { id, value } = event.target;
    setPengungsi((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }

  // sumbit data dan data dimasukkan ke tabel
  function submitHandler(event) {
    setDataPengungsi((prevPengungsi) => {
      return [...prevPengungsi, Pengungsi];
    });

    setPengungsi({
      namaPengungsi: "",
      jenisKelamin: "",
      umur: "",
      keadaan: "",
      alamat: "",
    });
    event.preventDefault();
  }

  // hapus data pada tabel
  function deleteItem(id) {
    setDataPengungsi((prevPengungsi) => {
      return prevPengungsi.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <React.Fragment>
      <div className="isi full-height">
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
              <form>
                <TextField
                  id="namaPengungsi"
                  label="Nama Pengungsi"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={changeHandler}
                  value={Pengungsi.namaPengungsi}
                />
                <TextField
                  id="jenisKelamin"
                  label="Jenis Kelamin"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={changeHandler}
                  value={Pengungsi.jenisKelamin}
                />
                <TextField
                  id="umur"
                  label="Umur"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={changeHandler}
                  value={Pengungsi.umur}
                />
                <TextField
                  id="keadaan"
                  label="Keadaan"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={changeHandler}
                  value={Pengungsi.keadaan}
                />
                <TextField
                  id="alamat"
                  label="Alamat"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={changeHandler}
                  value={Pengungsi.alamat}
                />
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
        <Tabel deleteItem={deleteItem} dataPengungsi={dataPengungsi} />
        <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
          Save
        </Button>
      </div>
    </React.Fragment>
  );
};

export default DataPengungsi;
