import React, { useState } from "react";
import { Typography, Box, Button, TextField } from "@material-ui/core";

// import "./BantuanMasukPosko.css";
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
    namaBarang: "",
    satuan: "",
    banyaknya: "",
    jenisBantuan: "Utama",
  });

  function changeHandler(event) {
    const { id, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }

  function submitHandler(event) {
    props.addItem(data);
    setData({
      namaBarang: "",
      satuan: "",
      banyaknya: "",
      jenisBantuan: "Utama",
    });
    event.preventDefault();
  }

  return (
    <form>
      <Typography component="div">
        <Box fontSize={17}>Item Data</Box>
      </Typography>
      <div className="data">
        <TextField
          id="jenisBantuan"
          select
          label="Jenis Bantuan"
          // onChange={handleChange}
          onChange={changeHandler}
          // onChange={props.changeHandlerItem}
          // value={currency}
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
    </form>
  );
}
export default ItemData;
