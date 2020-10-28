import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { insertPetugasVolunteer } from "../../../actions/profile";
import Alert from "../../../layout/Alert";
import { Button, TextField, Typography, Box, Grid } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

const DataPetugas = ({ insertPetugasVolunteer, history }) => {
  const [dataPetugas, setDataPetugas] = useState({
    tambahanPetugas: "",
    jabatan2: "",
  });

  const { tambahanPetugas, jabatan2 } = dataPetugas;

  function changeHandler(event) {
    const { id, value } = event.target;
    setDataPetugas((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }

  const onSubmit = (e) => {
    insertPetugasVolunteer(dataPetugas, history);
    e.preventDefault();
  };
  return (
    <form
      className="body-posko-bencana full-height"
      style={{ marginTop: 50 }}
      onSubmit={(e) => onSubmit(e)}
    >
      <Grid container>
        <Grid xs={2} sm={3} item />
        <Grid xs={8} sm={6} item>
          <Typography component="div">
            <Box fontSize={17}>Tambah Petugas / Relawan Posko</Box>
          </Typography>
          <TextField
            id="tambahanPetugas"
            label="Nama Petugas / Relawan"
            margin="normal"
            variant="outlined"
            size="small"
            fullWidth
            onChange={changeHandler}
            value={tambahanPetugas}
          />
          <TextField
            id="jabatan2"
            label="Jabatan Petugas / Tugas Relawan"
            margin="normal"
            variant="outlined"
            size="small"
            fullWidth
            onChange={changeHandler}
            value={jabatan2}
          />
          <Button
            color="primary"
            variant="contained"
            style={{ margin: 8 }}
            aria-label="tambah petugas"
            startIcon={<AddIcon />}
            type="submit"
          >
            Tambahkan
          </Button>
          <Button
            color="secondary"
            variant="contained"
            style={{ margin: 8 }}
            aria-label="tambah petugas"
          >
            <Link to="/posko/data-posko">Kembali</Link>
          </Button>
          <Alert />
        </Grid>
        <Grid xs={2} sm={3} item />
      </Grid>
    </form>
  );
};

DataPetugas.propTypes = {
  insertPetugasVolunteer: PropTypes.func.isRequired,
};

export default connect(null, { insertPetugasVolunteer })(
  withRouter(DataPetugas)
);
