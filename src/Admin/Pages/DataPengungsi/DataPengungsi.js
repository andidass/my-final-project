import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Tabel from "./Tabel";
import "./DataPengungsi.css";

import {
  Grid,
  Typography,
  TextField,
  Paper,
  Button,
  Box,
} from "@material-ui/core";

const DataPengungsi = ({ user }) => {
  const [kataPencarian, setKataPencarian] = useState("");
  const onChange = (e) => setKataPencarian(e.target.value);

  return (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Data pengungsi</Typography>
        <Typography variant="subtitle2">
          Data semua pengungsi di seluruh pos pengungsian
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        {!user ? (
          <Link to="/main-page">Kembali</Link>
        ) : (
          <Link to="/admin/dashboard">Kembali</Link>
        )}
      </Button>

      <Paper variant="outlined" className="body-pos-bencana">
        <Grid container justify="center">
          <Grid item>
            <div className="search">
              <TextField
                id="kataPencarian"
                placeholder="cari pengungsi"
                style={{ minWidth: 300 }}
                margin="normal"
                variant="outlined"
                size="small"
                autoFocus
                onChange={(e) => onChange(e)}
                value={kataPencarian}
              />
            </div>
          </Grid>
        </Grid>
        <Typography component="div">
          <Box
            fontWeight="fontWeightBold"
            textAlign="center"
            fontSize={18}
            marginTop={5}
          >
            Daftar Pengungsi
          </Box>
        </Typography>
        <Tabel kataPencarian={kataPencarian} />
      </Paper>
    </Fragment>
  );
};

export default DataPengungsi;
