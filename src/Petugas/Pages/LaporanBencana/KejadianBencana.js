import React, { useState, useEffect, Fragment } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "../../../layout/Alert";
import MapPosko from "../../../layout/Map";
import { createDataBencana } from "../../../actions/dataBencana";
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
import SaveIcon from "@material-ui/icons/Save";
import "./style.css";

const KejadianBencana = ({
  createDataBencana,
  history,
  auth: { user, token },
  dataBencana: { dataBencana, loading },
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
  // posko
  const [data, setData] = useState({
    jenisBencana: "",
    tglKejadian: "",
    waktuKejadian: "",
    penyebab: "",
    desc: "",
    cuaca: "",
    kabupaten: "",
    kelurahan: "",
    kec: "",
    cakupan: "",
    lat: "",
    lng: "",

    aksesKeLokasi: "",
    saranaTransportasi: "",
    jalurKomunikasi: "",
    keadaanJaringanListrik: "",
    keadaanJaringanAir: "",
    fasKes: "",
    upayaPenanganan: "",
  });

  const {
    jenisBencana,
    tglKejadian,
    waktuKejadian,
    penyebab,
    desc,
    cuaca,
    kabupaten,
    kelurahan,
    kec,
    cakupan,
    lat,
    lng,
  } = data;

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
      setData({
        ...data,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }
  };

  if (token === null) {
    return <Redirect to="/petugas/login" />;
  }

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = (event) => {
    event.preventDefault();
    createDataBencana(data, history, true);
  };

  return (
    dataBencana && (
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
              <form type="submit" onSubmit={submitHandler}>
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
                  name="kec"
                  label="Kecamatan"
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
                  name="kelurahan"
                  label="Kelurahan/Desa-Dusun"
                  style={{ margin: 8, maxWidth: 500 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => onChange(e)}
                  value={kelurahan}
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
                {lat && lng && (
                  <MapPosko
                    location={{ lat: lat, lng: lng }}
                    namaPosko={jenisBencana}
                  />
                )}
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
                <Alert />
                <div>
                  <Button
                    variant="contained"
                    className="button"
                    color="primary"
                    type="submit"
                    style={{ margin: 8, maxWidth: 500 }}
                    startIcon={<SaveIcon />}
                  >
                    Simpan Data
                  </Button>
                </div>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Fragment>
    )
  );
};

KejadianBencana.propTypes = {
  auth: PropTypes.object.isRequired,
  createDataBencana: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  dataBencana: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dataBencana: state.dataBencana,
});

export default connect(mapStateToProps, { createDataBencana })(
  withRouter(KejadianBencana)
);
