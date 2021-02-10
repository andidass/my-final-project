import React, { useState, Fragment } from "react";
import { Typography, Box, Button, TextField } from "@material-ui/core";

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

function ItemData({ addItem, bantuanUtama }) {
  const [data, setData] = useState({
    // penyimpanan state sementara
    namaBarang: bantuanUtama[0].namaBarang,
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

  const submitHandler2 = (event) => {
    // utk menyimpan state sementara pada state permanent.
    addItem(data); // memanggil fungsi pada BantuanMasukPosko.js
    setData({
      // mereset state {data} serta inputan textField menjadi kosong setelah button submit tertekan.
      namaBarang: bantuanUtama[0].namaBarang,
      satuan: "",
      banyaknya: "",
      jenisBantuan: "Utama",
      nilainya: "",
    });
    event.preventDefault();
  };

  const cobaHandler = (e) => {
    setData({ ...data, namaBarang: "" });
    e.preventDefault(e);
  };

  return (
    <Fragment>
      <Typography component="div">
        <Box fontSize={17}>Item Data</Box>
      </Typography>
      <div className="data">
        <TextField
          id="jenisBantuan"
          label="Jenis Bantuan"
          onChange={changeHandler}
          value={data.jenisBantuan}
          fullWidth
          // required
          style={{ margin: 8 }}
          select
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          size="small"
        >
          {jenisBantuan2.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        {data.jenisBantuan === "Utama" ? (
          <TextField
            id="namaBarang"
            label="Nama Barang"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
            onChange={changeHandler}
            select
            SelectProps={{
              native: true,
            }}
            value={data.namaBarang}
          >
            {bantuanUtama.map((option) => (
              <option key={option.namaBarang} value={option.namaBarang}>
                {option.namaBarang}
              </option>
            ))}
          </TextField>
        ) : (
          <TextField
            id="namaBarang"
            label="Nama Barang"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
            value={data.namaBarang}
            onClick={(e) => cobaHandler(e)} //akalin ajalah
            onChange={changeHandler}
          />
        )}
        <TextField
          id="satuan"
          label="Satuan"
          style={{ margin: 8 }}
          fullWidth
          // required
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
          // required
          margin="normal"
          type="number"
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
          // required
          margin="normal"
          type="number"
          variant="outlined"
          size="small"
          value={data.nilainya}
          onChange={changeHandler}
        />
        <Button
          variant="contained"
          // type="submit"
          onClick={submitHandler2}
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
