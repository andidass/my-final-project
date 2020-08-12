import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";

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
  const [currency, setCurrency] = React.useState("Utama");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <form>
      <Typography variant="p" component="p">
        Item Data
      </Typography>
      <div className="data">
        <TextField
          id="jenis-bantuan"
          select
          label="Jenis Bantuan"
          onChange={props.changeHandlerItem}
          value={currency}
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
          onChange={handleChange}
          id="nama-barang"
          label="Nama Barang"
          onChange={props.changeHandlerItem}
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
        />
        <TextField
          id="satuan-barang"
          label="Satuan"
          onChange={props.changeHandlerItem}
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
        />
        <TextField
          id="banyak-barang"
          label="Banyaknya"
          onChange={props.changeHandlerItem}
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
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
