import React, { useState } from "react";
import { Box, Grid, Typography, Button, TextField } from "@material-ui/core";
import Table from "../Components/Table";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../Components/Header";
import MenuBar from "../Components/MenuBar";
import ItemData from "../Components/ItemData";

import "./BantuanMasukPosko.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function BantuanMasukPosko() {
  const [rows, setRows] = useState([]);

  function addItem(newItem) {
    setRows((prevRows) => {
      return [...prevRows, newItem];
    });
  }

  function deleteItem(id) {
    setRows((prevRows) => {
      return prevRows.filter((theItem, index) => {
        return index !== id;
      });
    });
  }

  const classes = useStyles();
  return (
    <div>
      <Header />
      <MenuBar />
      <div className="isi">
        <Typography component="div" className="title">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize={18}>
            Bantuan Masuk
          </Box>
        </Typography>
        <Grid container justify="space-around" className="isi-body">
          <Grid xs={12} sm={6} item>
            <form className={classes.container} noValidate>
              <Typography component="div">
                <Box fontSize={17}>Data Bantuan Masuk</Box>
              </Typography>
              <TextField
                id="kode-transaksi"
                label="Kode Transaksi"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
              />

              <TextField
                id="date"
                label="Tanggal"
                variant="outlined"
                type="date"
                style={{ margin: 8 }}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                size="small"
              />

              <Typography component="div" align="center">
                <Box fontSize={17}>Data Donatur</Box>
              </Typography>
              <div className="data">
                <TextField
                  id="nama-donatur"
                  label="Nama Donatur (Perorang/Instansi)"
                  style={{ margin: 8 }}
                  // placeholder="Nama Donatur / Instansi"
                  fullWidth
                  margin="normal"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  variant="outlined"
                  size="small"
                />

                <TextField
                  id="sumber-dana"
                  label="Sumber Dana Bantuan"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  size="small"
                />

                <TextField
                  id="alamat-donatur"
                  label="Alamat Donatur / Instansi"
                  style={{ margin: 8 }}
                  fullWidth
                  multiline
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              </div>
            </form>
          </Grid>
          <Grid xs={12} sm={6} item>
            {/* ------------------------ ItemData.js -----------------------*/}
            <ItemData
              addItem={addItem}
              row={rows}
              // changeHandlerItem={changeHandler}
              // submitHandler={submitHandler}
            />
          </Grid>
          <Grid xs={12} item>
            <form>
              {/* ------------------ TABLE.JS ------------------------- */}
              <Table rows={rows} deleteItem={deleteItem} />
              <Button
                variant="contained"
                color="primary"
                size="small"
                align="center"
                style={{ margin: 8 }}
                startIcon={<SaveIcon />}
              >
                Simpan
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                style={{ margin: 8 }}
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default BantuanMasukPosko;
