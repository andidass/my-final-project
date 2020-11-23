import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getBantuanMasuk,
  createBantuanMasuk,
} from "../../../actions/bantuanMasuk";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import _uniqueId from "lodash/uniqueId";
import Table from "./Table";
import ItemData from "./ItemData";
import InitData from "./InitData";

import "./BantuanMasukPosko.css";

const BantuanMasukPosko = ({ getBantuanMasuk, createBantuanMasuk }) => {
  useEffect(() => {
    getBantuanMasuk();
  }, [getBantuanMasuk]);

  const [id] = useState(_uniqueId("bpbd-ntb-"));
  const [rows, setRows] = useState([]); // data item
  const [dataInit, setDataInit] = useState({
    // data initData.js
    kodeTransaksi: id,
    // tanggalTransaksi: date,
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

  const cekState = (e) => {
    e.preventDefault();
    console.log("rows: ", rows);
    console.log("dataInit: ", dataInit);
  };

  function deleteItem(id) {
    //menghapus item pada tabel di Tabel.js
    setRows((prevRows) => {
      return prevRows.filter((theItem, index) => {
        return index !== id;
      });
    });
  }

  // ! LET'S FIX THIS
  function submitHandler(e) {
    e.preventDefault();
    console.log("submit");
    setDataInit({ ...dataInit, dataItemBantuan: rows });
    createBantuanMasuk(dataInit);
    // setDataInit({
    //   kodeTransaksi: id,
    //   // tanggalTransaksi: date,
    //   namaDonatur: "",
    //   sumberDana: "",
    //   alamatDonatur: "",
    // });
    // setRows([]);
  }

  return (
    <form onSubmit={submitHandler} className="isi">
      <Typography component="div">
        <Box fontWeight="fontWeightBold" textAlign="center" fontSize={18}>
          Bantuan Masuk
        </Box>
      </Typography>
      <Grid container className="isi-body">
        <Grid xs={12} sm={6} item>
          {/* ------------------------ InitData.js -----------------------*/}
          <InitData
            dataInit={dataInit}
            // submitHandler={submitHandler}
            changeHandlerInit={changeHandlerInit}
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          {/* ------------------------ ItemData.js -----------------------*/}
          <ItemData addItem={addItem} />
          <Alert />
        </Grid>
        <Grid xs={12} item>
          {/* ---------------------- TABLE.JS -------------------------- */}
          <Table rows={rows} deleteItem={deleteItem} />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 8 }}
            startIcon={<SaveIcon />}
            type="submit"
          >
            Simpan
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 8 }}
            onClick={cekState}
          >
            print state
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
BantuanMasukPosko.propTypes = {
  getBantuanMasuk: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
  createBantuanMasuk: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanMasuk: state.bantuanMasuk,
});

export default connect(mapStateToProps, {
  getBantuanMasuk,
  createBantuanMasuk,
})(BantuanMasukPosko);
