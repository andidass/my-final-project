import React, { Fragment } from "react";
import { Box, Typography, TextField } from "@material-ui/core";

function InitData(props) {
  function changeHandler(event) {
    props.changeHandlerInit(event); //memanggil fungsi pada BantuanMasukPosko.js
  }

  return (
    <Fragment>
      <Typography component="div">
        <Box fontSize={17}>Data Transaksi</Box>
      </Typography>
      <div className="data">
        <TextField
          id="kodeTransaksi"
          label="Kode Transaksi"
          style={{ margin: 8 }}
          margin="normal"
          variant="outlined"
          size="small"
          disabled
          value={props.dataInit.kodeTransaksi}
          onChange={changeHandler}
        />
        <TextField
          id="tanggalTransaksi"
          label="Tanggal"
          variant="outlined"
          type="date"
          format="dd-MM-yyyy"
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          size="small"
          // required
          value={props.dataInit.tanggalTransaksi}
          onChange={changeHandler}
        />
      </div>

      <Typography component="div">
        <Box fontSize={17} marginTop={2}>
          Data Donatur
        </Box>
      </Typography>
      <div className="data">
        <TextField
          id="namaDonatur"
          label="Nama Donatur (Perorang/Instansi)"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          required
          value={props.dataInit.namaDonatur}
          onChange={changeHandler}
        />

        <TextField
          id="sumberDana"
          label="Sumber Dana Bantuan"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          required
          value={props.dataInit.sumberDana}
          onChange={changeHandler}
        />

        <TextField
          id="alamatDonatur"
          label="Alamat Donatur / Instansi"
          style={{ margin: 8 }}
          fullWidth
          multiline
          margin="normal"
          variant="outlined"
          size="small"
          required
          value={props.dataInit.alamatDonatur}
          onChange={changeHandler}
        />
      </div>
    </Fragment>
  );
}

export default InitData;
