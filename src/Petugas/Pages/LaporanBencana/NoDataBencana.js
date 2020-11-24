import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createDataBencana } from "../../../actions/dataBencana";
import Alert from "../../../layout/Alert";

import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

const DataBencana = ({ createDataBencana, auth: { user }, history }) => {
  // posko
  const [data, setData] = useState({
    rumahrb: "",
    rumahrs: "",
    rumahrr: "",
    fasum: "",
    faskes: "",
    faspen: "",
    peribadatan: "",
    terdampak: "",
    luka: "",
    md: "",
  });

  const {
    rumahrb,
    rumahrs,
    rumahrr,
    fasum,
    faskes,
    faspen,
    peribadatan,
    terdampak,
    luka,
    md,
  } = data;

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createDataBencana(data, history, true);
  };

  return (
    <div>
      <Typography component="div">
        <Box
          fontSize={18}
          fontWeight="fontWeightBold"
          marginTop={3}
          textAlign="center"
        >
          Laporan Bencana
        </Box>
      </Typography>
      <Paper variant="outlined" className="body-posko-bencana">
        <form className="body-posko-bencana" onSubmit={(e) => onSubmit(e)}>
          <Grid container justify="space-around">
            <Grid xs={12} sm={6} item>
              {/* <DataPosko /> */}
              <Typography component="div">
                <Box fontSize={17}>Data Fasilitas</Box>
              </Typography>
              <TextField
                name="rumahrb"
                label="Rumah Rusak Berat"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={rumahrb}
              />
              <TextField
                name="rumahrs"
                label="Rumah Rusak Sedang"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                onChange={(e) => onChange(e)}
                value={rumahrs}
              />

              <TextField
                name="rumahrr"
                label="Rumah Rusak Ringan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={rumahrr}
              />
              <TextField
                name="fasum"
                label="Fasilitas Umum"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={fasum}
              />
              <TextField
                name="faskes"
                label="Fasilitas Kesehatan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={faskes}
              />
              <TextField
                name="faspen"
                label="Fasilitas Pendidikan"
                style={{ margin: 8, maxWidth: 500 }}
                margin="normal"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => onChange(e)}
                value={faspen}
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
              <Button
                variant="contained"
                size="small"
                style={{ margin: 8, maxWidth: 500 }}
              >
                <Link to="/petugas/dashboard">Kembali</Link>
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                style={{ margin: 8, maxWidth: 500 }}
              >
                Simpan
              </Button>
            </Grid>
            <Alert />
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

DataBencana.propTypes = {
  user: PropTypes.object.isRequired,
  createDataBencana: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { createDataBencana })(
  withRouter(DataBencana)
);
