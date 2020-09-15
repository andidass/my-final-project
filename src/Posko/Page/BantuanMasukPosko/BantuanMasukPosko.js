import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import _uniqueId from "lodash/uniqueId";

import MenuBar from "../../Components/MenuBar";
import Table from "./Table";
import ItemData from "./ItemData";
import InitData from "./InitData";

import "./BantuanMasukPosko.css";

function BantuanMasukPosko() {
  // variabel penyimpanan data tetap
  var date = new Date().toLocaleDateString(); // set tanggal local sekarang
  const [id] = useState(_uniqueId("bpbd-ntb-"));
  const [rows, setRows] = useState([]);
  const [allData, setAllData] = useState([]); // semua data disimpan pada var ini.

  // variabel penyimpanan data sementara (onChange textField)
  const [dataInit, setDataInit] = useState({
    //penyimpanan inputan onChange pada initData.js
    kodeTransaksi: id,
    tanggalTransaksi: date,
    namaDonatur: "",
    sumberDana: "",
    alamatDonatur: "",
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

  function submitHandler() {
    // menyimpan secara permanen initData dan itemData
    setAllData((prevAllData) => {
      return [...prevAllData, dataInit, rows];
    });
    setDataInit({
      kodeTransaksi: id,
      tanggalTransaksi: date,
      namaDonatur: "",
      sumberDana: "",
      alamatDonatur: "",
    });
    setRows([]);
    console.log(allData);
  }

  return (
    <React.Fragment className="main-container">
      <MenuBar />
      <div className="isi">
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
              submitHandler={submitHandler}
              changeHandlerInit={changeHandlerInit}
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            {/* ------------------------ ItemData.js -----------------------*/}
            <ItemData addItem={addItem} />
          </Grid>
          <Grid xs={12} item>
            {/* ---------------------- TABLE.JS -------------------------- */}
            <Table rows={rows} deleteItem={deleteItem} />
            <Button
              variant="contained"
              color="primary"
              style={{ margin: 8 }}
              startIcon={<SaveIcon />}
              onClick={submitHandler}
            >
              Simpan
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default BantuanMasukPosko;