import React, { useState, Fragment } from "react";
import { Typography, Box, Button, TextField } from "@material-ui/core";

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

function ItemData(props) {
  const [data, setData] = useState({
    // penyimpanan state sementara
    namaBarang: "",
    satuan: "",
    banyaknya: "",
    nilainya: "",
    jenisBantuan: "Utama",
  });

  const changeHandler = (event) => {
    // mengisi data pada state {data}
    const { id, value } = event.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  const submitHandler = (event) => {
    // utk menyimpan state sementara pada state permanent.
    props.addItem(data); // memanggil fungsi pada BantuanMasukPosko.js
    setData({
      // mereset state {data} serta inputan textField menjadi kosong setelah button submit tertekan.
      namaBarang: "",
      satuan: "",
      banyaknya: "",
      jenisBantuan: "Utama",
    });
    event.preventDefault();
  };

  return (
    <Fragment>
      <Typography component="div">
        <Box fontSize={17}>Item Data</Box>
      </Typography>
      <div className="data">
        <TextField
          id="jenisBantuan"
          select
          label="Jenis Bantuan"
          onChange={changeHandler}
          value={data.jenisBantuan}
          fullWidth
          style={{ margin: 8 }}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          size="small"
        >
          {jenisBantuan.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="namaBarang"
          label="Nama Barang"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          value={data.namaBarang}
          onChange={changeHandler}
        />
        <TextField
          id="satuan"
          label="Satuan"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          value={data.satuan}
          onChange={changeHandler}
        />
        <TextField
          id="banyaknya"
          label="Banyaknya"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          value={data.banyaknya}
          onChange={changeHandler}
        />
        <TextField
          id="nilainya"
          label="Nilai Barang"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          value={data.nilainya}
          onChange={changeHandler}
        />
        <Button
          variant="contained"
          onClick={submitHandler}
          color="primary"
          fullWidth
          style={{ margin: 8 }}
        >
          Tambah
        </Button>
      </div>
    </Fragment>
  );
}
export default ItemData;
