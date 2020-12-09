import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Confirmation from "./Confirmation";
import { insertBantuanKeluar } from "../../../actions/bantuanKeluar";
import Alert from "../../../layout/Alert";
// import Spinner from "../../../Components/Spinner";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import uniqid from "uniqid";
import Table from "./Table";
import ItemData from "./ItemData";
import InitData from "./InitData";
import HistoryIcon from "@material-ui/icons/History";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./BantuanKeluar.css";

const BantuanKeluar = ({
  insertBantuanKeluar,
  auth,
  bantuanKeluar,
  history,
}) => {
  const [id, setId] = useState(uniqid("bpbd-ntb-"));
  const [rows, setRows] = useState([]); // data item
  // const [open, setOpen] = React.useState(false);
  const [dataInit, setDataInit] = useState({
    kodeTransaksi: id,
    tanggalTransaksi: "",
    namaPenerima: "",
    jabatan: "",
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
    insertBantuanKeluar(dataInit, history);
    setDataInit({
      kodeTransaksi: id,
      namaPenerima: "",
      jabatan: "",
    });
    setRows([]);
    // setId(uniqid("2123123"));
    setId(uniqid("bpbd-ntb-"));
  };

  return (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Input Bantuan keluar</Typography>
        <Typography variant="subtitle2">Input data bantuan keluar</Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/admin/bantuan-keluar">Kembali</Link>
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<HistoryIcon />}
        style={{ margin: 8 }}
      >
        <Link style={{ color: "white" }} to="/admin/bantuan-keluar">
          History Bantuan Keluar
        </Link>
      </Button>
      <form className="isi">
        <Typography component="div">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize={18}>
            Bantuan Keluar
          </Box>
        </Typography>
        <Grid container className="isi-body">
          <Grid xs={12} sm={6} item>
            {/* ------------------------ InitData.js -----------------------*/}
            <InitData
              dataInit={dataInit}
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
    </Fragment>
  );
};
BantuanKeluar.propTypes = {
  auth: PropTypes.object.isRequired,
  bantuanKeluar: PropTypes.object.isRequired,
  insertBantuanKeluar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanKeluar: state.bantuanKeluar,
});

export default connect(mapStateToProps, {
  insertBantuanKeluar,
})(withRouter(BantuanKeluar));
