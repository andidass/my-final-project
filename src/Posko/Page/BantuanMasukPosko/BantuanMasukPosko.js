import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { insertBantuanMasuk } from "../../../actions/bantuanMasuk";
import Alert from "../../../layout/Alert";
// import Spinner from "../../../Components/Spinner";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import uniqid from "uniqid";
import Table from "./Table";
import ItemData from "./ItemData";
import InitData from "./InitData";

import "./BantuanMasukPosko.css";

const BantuanMasukPosko = ({ insertBantuanMasuk, auth, bantuanMasuk }) => {
  const [id] = useState(uniqid("bpbd-ntb-"));
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
    // console.log(rows);
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

  const cekState = (e) => {
    e.preventDefault();
    // console.log("rows: ", rows);
    // console.log("dataInit: ", dataInit);
    setDataInit((dataInit) => {
      return { ...dataInit, dataItemBantuan: rows };
    }); // ! make sure state have been updated than execute next function
  };

  // ! LET'S FIX THIS
  const submitHandler = (e) => {
    // tobol simpan
    e.preventDefault();
    insertBantuanMasuk(dataInit);
    // console.log("submit");
    // console.log(dataInit);
    setDataInit({
      kodeTransaksi: id,
      namaDonatur: "",
      sumberDana: "",
      alamatDonatur: "",
    });
    setRows([]);
  };

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
          <InitData dataInit={dataInit} changeHandlerInit={changeHandlerInit} />
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
            Make sure state ready
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
BantuanMasukPosko.propTypes = {
  auth: PropTypes.object.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
  insertBantuanMasuk: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanMasuk: state.bantuanMasuk,
});

export default connect(mapStateToProps, {
  insertBantuanMasuk,
})(BantuanMasukPosko);
