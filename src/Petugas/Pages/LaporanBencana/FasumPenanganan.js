import React, { useState, useEffect, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "../../../layout/Alert";
import { createDataBencana } from "../../../actions/dataBencana";
import SaveIcon from "@material-ui/icons/Save";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./style.css";

const FasumPenanganan = ({
  createDataBencana,
  dataBencana: { dataBencana, loading },
  history,
}) => {
  useEffect(() => {
    setData({
      jenisBencana:
        loading || !dataBencana.jenisBencana ? "" : dataBencana.jenisBencana,
      tglKejadian:
        loading || !dataBencana.tglKejadian ? "" : dataBencana.tglKejadian,
      waktuKejadian:
        loading || !dataBencana.waktuKejadian ? "" : dataBencana.waktuKejadian,
      penyebab: loading || !dataBencana.penyebab ? "" : dataBencana.penyebab,
      desc: loading || !dataBencana.desc ? "" : dataBencana.desc,
      cuaca: loading || !dataBencana.cuaca ? "" : dataBencana.cuaca,
      provinsi:
        loading || !dataBencana.lokasiBencana
          ? ""
          : dataBencana.lokasiBencana.provinsi,
      kabupaten:
        loading || !dataBencana.lokasiBencana
          ? ""
          : dataBencana.lokasiBencana.kabupaten,
      kelurahan:
        loading || !dataBencana.lokasiBencana
          ? ""
          : dataBencana.lokasiBencana.kelurahan,
      kec:
        loading || !dataBencana.lokasiBencana
          ? ""
          : dataBencana.lokasiBencana.kec,
      cakupan:
        loading || !dataBencana.lokasiBencana
          ? ""
          : dataBencana.lokasiBencana.cakupan,
      lat:
        loading || !dataBencana.lokasiBencana
          ? ""
          : dataBencana.lokasiBencana.lat,
      lng:
        loading || !dataBencana.lokasiBencana
          ? ""
          : dataBencana.lokasiBencana.lng,

      aksesKeLokasi:
        loading || !dataBencana.fasum ? "" : dataBencana.fasum.aksesKeLokasi,
      saranaTransportasi:
        loading || !dataBencana.fasum
          ? ""
          : dataBencana.fasum.saranaTransportasi,
      jalurKomunikasi:
        loading || !dataBencana.fasum ? "" : dataBencana.fasum.jalurKomunikasi,
      keadaanJaringanAir:
        loading || !dataBencana.fasum
          ? ""
          : dataBencana.fasum.keadaanJaringanAir,
      keadaanJaringanListrik:
        loading || !dataBencana.fasum
          ? ""
          : dataBencana.fasum.keadaanJaringanListrik,
      fasKes: loading || !dataBencana.fasum ? "" : dataBencana.fasum.fasKes,
      upayaPenanganan:
        loading || !dataBencana.fasum ? "" : dataBencana.fasum.upayaPenanganan,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [data, setData] = useState({
    //kejadian bencana
    jenisBencana: "",
    tglKejadian: "",
    waktuKejadian: "",
    penyebab: "",
    desc: "",
    cuaca: "",
    provinsi: "",
    kabupaten: "",
    kelurahan: "",
    kec: "",
    cakupan: "",
    lat: "",
    lng: "",

    // fasum dan penanganan
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
  } = data;

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createDataBencana(data, history, true);
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
              <Alert />
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

FasumPenanganan.propTypes = {
  createDataBencana: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  dataBencana: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dataBencana: state.dataBencana,
});

export default connect(mapStateToProps, { createDataBencana })(
  withRouter(FasumPenanganan)
);
