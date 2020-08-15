import React from "react";
import { Box, Typography, TextField } from "@material-ui/core";

function InitData(props) {
  // initial data bantuan masuk
  // var date = new Date().toLocaleDateString();
  // const [id] = useState(_uniqueId("bpbd-ntb-"));
  // const [dataInit, setDataInit] = useState({
  //   kodeTransaksi: id,
  //   tanggalTransaksi: date,
  //   namaDonatur: "",
  //   sumberDana: "",
  //   alamatDonatur: "",
  // });

  // function changeHandler(event) {
  //   const { id, value } = event.target;
  //   setDataInit((prevData) => {
  //     return {
  //       ...prevData,
  //       [id]: value,
  //     };
  //   });
  // }

  function changeHandler(event) {
    props.changeHandlerInit(event); //memanggil fungsi pada BantuanMasukPosko.js
  }

  return (
    <form>
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
          value={props.dataInit.alamatDonatur}
          onChange={changeHandler}
        />
      </div>
    </form>
  );
}

export default InitData;
