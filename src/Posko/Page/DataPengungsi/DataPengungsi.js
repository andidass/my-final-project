import React from "react";

import MenuBar from "../../Components/MenuBar";
import Tabel from "./Tabel";

import {
  Grid,
  Typography,
  Box,
  TextField,
  Paper,
  Button,
} from "@material-ui/core";

const jenisBantuan = [
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
const Pengungsi = [
  {
    namaPengungsi: "boy",
    jenisKelamin: "laki-laki",
    umur: "23",
    keadaan: "sehat",
    alamat: "dusun A",
  },
  {
    namaPengungsi: "putri",
    jenisKelamin: "perempuan",
    umur: "23",
    keadaan: "sehat",
    alamat: "dusun B",
  },
];

const DataPengungsi = () => {
  return (
    <React.Fragment>
      <MenuBar />
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
          <Grid xs={0} sm={3} item />
          <Grid xs={12} sm={6} item>
            <TextField
              id="namaPengungsi"
              label="Nama Pengungsi"
              style={{ margin: 8 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              // value={dataPetugas.namaPetugas}
            />
            <TextField
              id="jenisKelamin"
              label="Jenis Kelamin"
              style={{ margin: 8 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              // value={dataPetugas.namaPetugas}
            />
            <TextField
              id="usia"
              label="Umur"
              style={{ margin: 8 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              // value={dataPetugas.namaPetugas}
            />
            <TextField
              id="keadaan"
              label="Keadaan"
              style={{ margin: 8 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              // value={dataPetugas.namaPetugas}
            />
            <TextField
              id="alamat"
              label="Alamat"
              style={{ margin: 8 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              // value={dataPetugas.namaPetugas}
            />
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              style={{ margin: 8 }}
            >
              Tambah
            </Button>
          </Grid>
          <Grid xs={0} sm={3} />
        </Grid>
      </Paper>
      <Tabel Pengungsi={Pengungsi} />
    </React.Fragment>
  );
};

export default DataPengungsi;
