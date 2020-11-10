import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getBantuanMasuk,
  insertBantuanMasuk,
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

const BantuanMasukPosko = ({ getBantuanMasuk, insertBantuanMasuk }) => {
  useEffect(() => {
    getBantuanMasuk();
  }, [getBantuanMasuk]);

  // variabel penyimpanan data tetap
  // var date = new Date().toLocaleDateString(); // set tanggal local sekarang
  const [id] = useState(_uniqueId("bpbd-ntb-"));

  const [rows, setRows] = useState([]); // data item
  const [dataInit, setDataInit] = useState({
    // data initData.js
    kodeTransaksi: id,
    // tanggalTransaksi: date,
    namaDonatur: "",
    sumberDana: "",
    alamatDonatur: "",
  });
  const [allData, setAllData] = useState([]); // semua data disimpan pada var ini.

  function addItem(newItem) {
    // memasukkan data yg terisi pada form itemData.js, data akan digunakan utk ditampilkan pada Tabel.js
    setRows((prevRows) => {
      return [...prevRows, newItem];
    });
  }
  const cekState = (e) => {
    e.preventDefault();
    console.log("rows: ", rows);
    console.log("allData: ", allData);
  };
  const cekAllState = (e) => {
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

  // ! LET'S FIX THIS
  function submitHandler() {
    // menyimpan secara permanen initData dan itemData
    const itemData = dataInit;
    setAllData((prevAllData) => {
      return { ...prevAllData, dataInit, rows };
    });
    const allDatas = allData.dataInit;
    console.log(allData);
    console.log(allData.dataInit);
    insertBantuanMasuk(allDatas);
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
            onClick={submitHandler}
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
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 8 }}
            onClick={cekAllState}
          >
            print all state
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
BantuanMasukPosko.propTypes = {
  getBantuanMasuk: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
  insertBantuanMasuk: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanMasuk: state.bantuanMasuk,
});

export default connect(mapStateToProps, {
  getBantuanMasuk,
  insertBantuanMasuk,
})(BantuanMasukPosko);
