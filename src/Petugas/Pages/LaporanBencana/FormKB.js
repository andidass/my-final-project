import React, { useState, useEffect } from "react";
// import { withRouter, Link } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { createDataBencana } from "../../../actions/dataBencana";
import Alert from "../../../layout/Alert";
import SaveIcon from "@material-ui/icons/Save";
import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

const formKB = () => {
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
    <div>
      <Typography component="div">
        <Box
          fontSize={18}
          fontWeight="fontWeightBold"
          marginTop={3}
          textAlign="center"
        >
          {/* Form Kejadian Bencana (Form KB) */}
          Kejadian Bencana
        </Box>
      </Typography>
      <Paper variant="outlined" className="body-posko-bencana">
        <form className="body-posko-bencana" onSubmit={(e) => onSubmit(e)}>
          <Grid container justify="space-around">
            <Grid xs={12} sm={6} item>
              <Typography component="div">
                <Box fontSize={17}>Data Fasilitas</Box>
              </Typography>
              <TextField
                name="jenisBencana"
                label="Rumah Rusak Berat"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={jenisBencana}
              />
              <TextField
                name="tglKejadian"
                label="Rumah Rusak Sedang"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={tglKejadian}
              />

              <TextField
                name="waktuKejadian"
                label="Rumah Rusak Ringan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={waktuKejadian}
              />
              <TextField
                name="penyebab"
                label="Fasilitas Umum"
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
                label="Fasilitas Kesehatan"
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
                label="Fasilitas Pendidikan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={desc}
              />
              <TextField
                name="peribadatan"
                label="Tempat Ibadah"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={peribadatan}
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              {/* <DataPosko /> */}
              <Typography component="div">
                <Box fontSize={17}>Data Korban Jiwa</Box>
              </Typography>
              <TextField
                name="terdampak"
                label="Korban Terdampak"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={terdampak}
              />
              <TextField
                name="luka"
                label="Korban Luka"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={luka}
              />

              <TextField
                name="md"
                label="Korban Meninggal Dunia"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={md}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
            style={{ margin: 8, maxWidth: 500 }}
          >
            Simpan
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{ margin: 8, maxWidth: 500 }}
          >
            <Link to="/petugas/dashboard">Kembali</Link>
          </Button>
          <Alert />
        </form>
      </Paper>
    </div>
  );
};

export default formKB;
