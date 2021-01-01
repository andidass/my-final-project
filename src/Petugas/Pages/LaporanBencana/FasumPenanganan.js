import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./style.css";

const FasumPenanganan = () => {
  const [fasum, setFasum] = useState({
    aksesKeLokasi: "",
    saranaTransportasi: "",
    jalurKomunikasi: "",
    keadaanJaringanListrik: "",
    keadaanJaringanAir: "",
    fasKes: "",
    upayaPenanganan: "",
  });

  const {
    aksesKeLokasi,
    saranaTransportasi,
    jalurKomunikasi,
    keadaanJaringanListrik,
    keadaanJaringanAir,
    fasKes,
    upayaPenanganan,
  } = fasum;

  const onChange = (e) =>
    setFasum({ ...fasum, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // createDataBencana(dataKejadian, history, true);
  };

  return (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Kejadian Bencana</Typography>
        <Typography variant="subtitle2">Data Kejadian Bencana</Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/petugas/data-bencana">Kembali</Link>
      </Button>

      <Grid container justify="center">
        <Paper variant="outlined" className="paper-form">
          <Grid item style={{ padding: `2rem` }}>
            <Typography component="div">
              <Box fontSize={17}>
                <b>Fasilitas Umum Yang Masih Bisa Digunakan</b>
              </Box>
            </Typography>
            <form onSubmit={(e) => onSubmit(e)}>
              <TextField
                name="aksesKeLokasi"
                label="Akses ke Lokasi"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={aksesKeLokasi}
              />
              <TextField
                name="saranaTransportasi"
                label="Sarana Transportasi (angkutan umum, ketersediaan BBM)"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={saranaTransportasi}
              />
              <TextField
                name="jalurKomunikasi"
                label="Jalur Komunikasi (seluler, telp, radio)"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={jalurKomunikasi}
              />
              <TextField
                name="keadaanJaringanListrik"
                label="Keadaan Jaringan Listrik"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={keadaanJaringanListrik}
              />

              <TextField
                name="keadaanJaringanAir"
                label="Keadaan Jaringan Air/Air Bersih"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={keadaanJaringanAir}
              />
              <TextField
                name="fasKes"
                label="Fasilitas Kesehatan (RS, Puskesmas, Pustu)"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={fasKes}
              />
              <Typography component="div">
                <Box fontSize={17}>
                  <b>Upaya Penanganan Darurat Yang Telah Dilakukan</b>
                </Box>
              </Typography>
              <TextField
                name="upayaPenanganan"
                label="Upaya Penanganan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={upayaPenanganan}
              />
              <div>
                <Button
                  variant="contained"
                  className="button"
                  color="primary"
                  style={{ margin: 8, maxWidth: 500 }}
                  type="submit"
                  startIcon={<SaveIcon />}
                >
                  Simpan
                </Button>
              </div>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
};

export default FasumPenanganan;
