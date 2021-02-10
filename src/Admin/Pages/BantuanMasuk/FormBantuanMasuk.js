import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Confirmation from "./Confirmation";
import { insertBantuanMasuk } from "../../../actions/bantuanMasuk";
import Alert from "../../../layout/Alert";
import { Box, Grid, Typography, Button, TextField } from "@material-ui/core";
import uniqid from "uniqid";
import Table from "./Table";
import ItemData from "./ItemData";
import HistoryIcon from "@material-ui/icons/History";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./BantuanMasuk.css";

const BantuanMasuk = ({
  insertBantuanMasuk,
  auth: { isAuthenticated },
  bantuanMasuk,
  bantuanUtama: { bantuanUtama },
  history,
}) => {
  const [id, setId] = useState(uniqid("bpbd-ntb-"));
  const [rows, setRows] = useState([]); // data item
  const [dataInit, setDataInit] = useState({
    kodeTransaksi: id,
    tanggalTransaksi: "",
    namaDonatur: "",
    sumberDana: "",
    alamatDonatur: "",
    dataItemBantuan: rows,
  });

  function addItem(newItem) {
    // memasukkan data yg terisi pada form itemData.js, data akan digunakan utk ditampilkan pada Tabel.js
    setRows((prevRows) => {
      return [...prevRows, newItem];
    });
  }

  function deleteItem(id) {
    //menghapus item pada tabel di Tabel.js
    setRows((prevRows) => {
      return prevRows.filter((theItem, index) => {
        return index !== id;
      });
    });
  }

  function changeHandlerInit(event) {
    //memasukkan inputan (onChange) pada initData.js textField kedalam variabel dataInit (penyimpanan sementara)
    const { id, value } = event.target;
    setDataInit((prevDataInit) => {
      return {
        ...prevDataInit,
        [id]: value,
      };
    });
  }

  const submitHandler = (e) => {
    // tombol simpan
    setDataInit((dataInit) => {
      return { ...dataInit, dataItemBantuan: rows };
    });
  };

  const sumbitConfirmation = () => {
    insertBantuanMasuk(dataInit, history);
    setDataInit({
      kodeTransaksi: id,
      namaDonatur: "",
      sumberDana: "",
      alamatDonatur: "",
    });
    setRows([]);
    setId(uniqid("bpbd-ntb-"));
  };

  if (!isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Input Bantuan Masuk</Typography>
        <Typography variant="subtitle2">Input data bantuan masuk</Typography>
      </div>
      {bantuanMasuk &&
      bantuanMasuk.bantuanMasuk.dataBantuanMasuk.length === 0 ? (
        <Button
          variant="outlined"
          size="small"
          startIcon={<ArrowBackIosIcon />}
          style={{ margin: 8 }}
        >
          <Link to="/admin/dashboard">Kembali</Link>
        </Button>
      ) : (
        <Button
          variant="outlined"
          size="small"
          startIcon={<ArrowBackIosIcon />}
          style={{ margin: 8 }}
        >
          <Link to="/admin/bantuan-masuk">Kembali</Link>
        </Button>
      )}
      {bantuanMasuk &&
      bantuanMasuk.bantuanMasuk.dataBantuanMasuk.length === 0 ? null : (
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<HistoryIcon />}
          style={{ margin: 8 }}
        >
          <Link style={{ color: "white" }} to="/admin/bantuan-masuk">
            History Bantuan Masuk
          </Link>
        </Button>
      )}
      <form className="isi">
        <Typography component="div">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize={18}>
            Bantuan Masuk
          </Box>
        </Typography>
        <Grid container className="isi-body">
          <Grid xs={12} sm={6} item>
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
                disabled
                value={dataInit.kodeTransaksi}
                onChange={changeHandlerInit}
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
                value={dataInit.tanggalTransaksi}
                onChange={changeHandlerInit}
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
                required
                value={dataInit.namaDonatur}
                onChange={changeHandlerInit}
              />

              <TextField
                id="sumberDana"
                label="Sumber Dana Bantuan"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                variant="outlined"
                size="small"
                required
                value={dataInit.sumberDana}
                onChange={changeHandlerInit}
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
                required
                value={dataInit.alamatDonatur}
                onChange={changeHandlerInit}
              />
            </div>
          </Grid>
          <Grid xs={12} sm={6} item>
            {/* ------------------------ ItemData.js -----------------------*/}
            <ItemData
              bantuanUtama={bantuanUtama && bantuanUtama.dataBantuanUtama}
              addItem={addItem}
            />
            <Alert />
          </Grid>
          <Grid xs={12} item>
            {/* ---------------------- TABLE.JS -------------------------- */}
            <Table rows={rows} deleteItem={deleteItem} />
            <Confirmation
              sumbitConfirmation={sumbitConfirmation}
              submitHandler={submitHandler}
            />
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};
BantuanMasuk.propTypes = {
  insertBantuanMasuk: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
  bantuanUtama: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanMasuk: state.bantuanMasuk,
  bantuanUtama: state.bantuanUtama,
});

export default connect(mapStateToProps, {
  insertBantuanMasuk,
})(withRouter(BantuanMasuk));
