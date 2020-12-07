import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Confirmation from "./Confirmation";
import { insertBantuanMasuk } from "../../../actions/bantuanMasuk";
import Alert from "../../../layout/Alert";
// import Spinner from "../../../Components/Spinner";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import uniqid from "uniqid";
import Table from "./Table";
import ItemData from "./ItemData";
import InitData from "./InitData";

import "./BantuanMasuk.css";

const BantuanMasuk = ({ insertBantuanMasuk, auth, bantuanMasuk, history }) => {
  const [id, setId] = useState(uniqid("bpbd-ntb-"));
  const [rows, setRows] = useState([]); // data item
  // const [open, setOpen] = React.useState(false);
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
    console.log("data init :", dataInit);
  };

  // ! LET'S FIX THIS
  const submitHandler = (e) => {
    // tombol simpan
    setDataInit((dataInit) => {
      return { ...dataInit, dataItemBantuan: rows };
    }); // ! make sure state have been updated than execute next function
    // e.preventDefault();
  };

  const sumbitConfirmation = () => {
    // e.preventDefault(e);
    insertBantuanMasuk(dataInit, history);
    setDataInit({
      kodeTransaksi: id,
      namaDonatur: "",
      sumberDana: "",
      alamatDonatur: "",
    });
    setRows([]);
    // setId(uniqid("2123123"));
    setId(uniqid("bpbd-ntb-"));
  };

  return (
    //onSubmit={submitHandler}
    <form className="isi">
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
          {/* <Button
            variant="contained"
            color="primary"
            style={{ margin: 8 }}
            startIcon={<SaveIcon />}
            type="submit"
          >
            Simpan
          </Button> */}
          <Confirmation
            sumbitConfirmation={sumbitConfirmation}
            submitHandler={submitHandler}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 8 }}
            startIcon={<SaveIcon />}
            onClick={(e) => cekState(e)}
          >
            Cek state aja!
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
BantuanMasuk.propTypes = {
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
})(withRouter(BantuanMasuk));
