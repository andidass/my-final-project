import React, { useState } from "react";

import {
  IconButton,
  TextField,
  Typography,
  Box,
  Button,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

const DataPetugas = () => {
  const [dataPetugas, setDataPetugas] = useState({
    namaPetugas: "",
    jabatan: "",
  });

  function changeHandler(event) {
    // mengisi data pada state {dataPetugas}
    const { id, value } = event.target;
    setDataPetugas((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }
  return (
    <form className="body-posko-bencana">
      <Typography component="div">
        <Box fontSize={17}>Data Petugas Posko</Box>
      </Typography>
      <TextField
        id="namaPetugas"
        label="Nama Petugas / Relawan"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        onChange={changeHandler}
        value={dataPetugas.namaPetugas}
      />
      <TextField
        id="jabatan"
        label="Jabatan Petugas / Tugas Relawan"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        onChange={changeHandler}
        value={dataPetugas.jabatan}
      />
      <IconButton
        color="primary"
        style={{ margin: 8 }}
        aria-label="tambah petugas"
      >
        <AddIcon />
      </IconButton>
      Tambahkan
    </form>
  );
};

export default DataPetugas;
