import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { insertPengungsi, getPengungsi } from "../../../actions/pengungsi";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";

import Tabel from "./Tabel";

import {
  Grid,
  Typography,
  Box,
  TextField,
  Paper,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

// const jenisKelamin = [
//   {
//     value: "Laki-laki",
//     label: "Laki-laki",
//   },
//   {
//     value: "Wanita",
//     label: "Wanita",
//   },
// ];

const DataPengungsi = ({
  // pengungsi: { semuaPengungsi, loading },
  pengungsi,
  semuaPengungsi,
  history,
  insertPengungsi,
  getPengungsi,
  auth: { user },
}) => {
  useEffect(() => {
    getPengungsi();
    // console.log(pengungsi.pengungsi);
  }, [getPengungsi]);
  // const [dataPengungsi, setDataPengungsi] = useState([]);

  const [dataPengungsi, setDataPengungsi] = useState({
    namaPengungsi: "",
    jenisKelamin: "",
    umur: "",
    keadaan: "",
    alamat: "",
  });

  function changeHandler(event) {
    const { id, value } = event.target;
    setDataPengungsi((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }

  // sumbit data dan data dimasukkan ke tabel
  function submitHandler(event) {
    insertPengungsi(dataPengungsi, history);
    // console.log(semuaPengungsi);
    console.log(pengungsi);
    // console.log(pengungsi.pengungsi);
    // console.log("submit2", pengungsi.allPengungsi);
    // setDataPengungsi((prevPengungsi) => {
    //   return [...prevPengungsi, dataPengungsi];
    // });

    // setDataPengungsi({
    //   namaPengungsi: "",
    //   jenisKelamin: "",
    //   umur: "",
    //   keadaan: "",
    //   alamat: "",
    // });
    event.preventDefault();
  }
  function sumbitDataHandler(event) {
    console.log(pengungsi);
    console.log("klik");
    event.preventDefault();
  }
  // hapus data pada tabel
  // function deleteItem(id) {
  //   setDataPengungsi((prevPengungsi) => {
  //     return prevPengungsi.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  // return loading ? <Spinner /> : ()
  return (
    <React.Fragment>
      <div className="isi full-height">
        <Typography component="div">
          <Box
            fontSize={18}
            fontWeight="fontWeightBold"
            textAlign="center"
            marginTop={3}
          >
            Data Pengungsi Posko
          </Box>
        </Typography>
        <Paper variant="outlined" className="body-posko-bencana">
          <Grid container>
            <Grid xs={1} sm={3} item />
            <Grid xs={10} sm={6} item>
              <form type="submit">
                <TextField
                  id="namaPengungsi"
                  label="Nama Pengungsi"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={changeHandler}
                  value={dataPengungsi.namaPengungsi}
                />
                <TextField
                  id="jenisKelamin"
                  label="Jenis Kelamin"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={changeHandler}
                  value={dataPengungsi.jenisKelamin}
                />
                <TextField
                  id="umur"
                  label="Umur"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={changeHandler}
                  value={dataPengungsi.umur}
                />
                <TextField
                  id="keadaan"
                  label="Keadaan"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={changeHandler}
                  value={dataPengungsi.keadaan}
                />
                <TextField
                  id="alamat"
                  label="Alamat"
                  style={{ margin: 8 }}
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={changeHandler}
                  value={dataPengungsi.alamat}
                />
                <Alert />
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  style={{ margin: 8 }}
                  onClick={submitHandler}
                >
                  Tambah
                </Button>
              </form>
            </Grid>
            <Grid xs={1} sm={3} item />
          </Grid>
        </Paper>
        {/* <Tabel semuaPengungsi={pengungsi.pengungsi} /> */}
        {/* deleteItem={deleteItem} */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={sumbitDataHandler}
        >
          Save
        </Button>
      </div>
    </React.Fragment>
  );
};

DataPengungsi.propTypes = {
  insertPengungsi: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  pengungsi: PropTypes.object.isRequired,
  getPengungsi: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps, { insertPengungsi, getPengungsi })(
  withRouter(DataPengungsi)
);
