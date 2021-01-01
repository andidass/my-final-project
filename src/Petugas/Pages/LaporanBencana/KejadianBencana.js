import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./style.css";

const KejadianBencana = () => {
  // posko
  const [dataKejadian, setDataKejadian] = useState({
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
  });

  const {
    jenisBencana,
    tglKejadian,
    waktuKejadian,
    penyebab,
    desc,
    cuaca,
    provinsi,
    kabupaten,
    kelurahan,
    kec,
    cakupan,
    lat,
    lng,
  } = dataKejadian;

  const setCurrentLocation = (e) => {
    e.preventDefault();
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(callback, error, options);
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    function callback(position) {
      setDataKejadian({
        ...dataKejadian,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }
  };

  const onChange = (e) =>
    setDataKejadian({ ...dataKejadian, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // createDataBencana(dataKejadian, history, true);
  };

  //   useEffect(() => {
  //     setDataKejadian({
  //       jenisBencana:
  //         loading || !dataBencana.jenisBencana ? "0" : dataBencana.jenisBencana,
  //       tglKejadian:
  //         loading || !dataBencana.tglKejadian ? "0" : dataBencana.tglKejadian,
  //       waktuKejadian:
  //         loading || !dataBencana.waktuKejadian ? "0" : dataBencana.waktuKejadian,
  //       penyebab: loading || !dataBencana.penyebab ? "0" : dataBencana.penyebab,
  //       desc: loading || !dataBencana.desc ? "0" : dataBencana.desc,
  //       cuaca: loading || !dataBencana.cuaca ? "0" : dataBencana.cuaca,
  //       peribadatan:
  //         loading || !dataBencana.peribadatan ? "0" : dataBencana.peribadatan,
  //       terdampak:
  //         loading || !dataBencana.terdampak ? "0" : dataBencana.terdampak,
  //       luka: loading || !dataBencana.luka ? "0" : dataBencana.luka,
  //       md: loading || !dataBencana.md ? "0" : dataBencana.md,
  //     });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
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
                <b>KEJADIAN BENCANA</b>
              </Box>
            </Typography>
            <div style={{ margin: 8 }}>
              <TextField
                name="tglKejadian"
                label="Tanggal Kejadian"
                margin="normal"
                type="date"
                format="dd-MM-yyyy"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                onChange={(e) => onChange(e)}
                value={tglKejadian}
              />
              <TextField
                name="waktuKejadian"
                margin="normal"
                variant="outlined"
                size="small"
                type="time"
                onChange={(e) => onChange(e)}
                value={waktuKejadian}
              />
            </div>
            <TextField
              name="jenisBencana"
              label="Jenis Bencana"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => onChange(e)}
              value={jenisBencana}
            />
            <Typography component="div">
              <Box fontSize={17}>Lokasi Bencana</Box>
            </Typography>
            <TextField
              name="provinsi"
              label="Provinsi"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => onChange(e)}
              value={provinsi}
            />
            <TextField
              name="kabupaten"
              label="Kabupaten"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => onChange(e)}
              value={kabupaten}
            />
            <TextField
              name="kelurahan"
              label="Kelurahan"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => onChange(e)}
              value={kelurahan}
            />
            <TextField
              name="kec"
              label="Kecamatan/Desa-Dusun"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              multiline
              onChange={(e) => onChange(e)}
              value={kec}
            />
            <TextField
              name="cakupan"
              label="Daerah Cakupan Bencana"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              multiline
              onChange={(e) => onChange(e)}
              value={cakupan}
            />
            <Typography component="div">
              <Box fontSize={17}>Letak Geografi</Box>
            </Typography>

            <TextField
              name="lat"
              label="Latitude"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              // fullWidth
              onChange={(e) => onChange(e)}
              value={lat}
            />
            <TextField
              name="lng"
              label="Longitude"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              // fullWidth
              onChange={(e) => onChange(e)}
              value={lng}
            />
            <Button
              variant="contained"
              className="button"
              color="primary"
              style={{ margin: 8, maxWidth: 500 }}
              onClick={(e) => setCurrentLocation(e)}
              startIcon={<LocationSearchingIcon />}
            >
              Set Lokasi
            </Button>
            <TextField
              name="penyebab"
              label="Penyebab Bencana"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => onChange(e)}
              value={penyebab}
            />
            <TextField
              name="cuaca"
              label="Kondisi Cuaca"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => onChange(e)}
              value={cuaca}
            />
            <TextField
              name="desc"
              label="Deskrpsi Bencana"
              style={{ margin: 8, maxWidth: 500 }}
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
              multiline
              onChange={(e) => onChange(e)}
              value={desc}
            />
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
};

export default KejadianBencana;
