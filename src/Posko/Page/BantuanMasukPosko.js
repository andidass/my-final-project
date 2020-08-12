import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Divider,
} from "@material-ui/core";
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

function changeHandler(event) {
  console.log(event.target.value);
  console.log(event.target.id);
}

function BantuanMasukPosko() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <MenuBar />
      <div className="isi">
        <Typography variant="p" component="h3" className="title">
          Bantuan Masuk
        </Typography>
        <Grid container justify="space-around" className="isi-body">
          <Grid xs={12} sm={6} item>
            <form className={classes.container} noValidate>
              <Typography variant="p" component="p" align="center">
                Data Bantuan Masuk
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
                type="datetime-local"
                style={{ margin: 8 }}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                size="small"
              />

              <Typography variant="p" component="p" align="center">
                Data Donatur
              </Typography>
              <div className="data">
                <TextField
                  id="nama-donatur"
                  label="Nama Donatur (Perorang/Instansi)"
                  style={{ margin: 8 }}
                  // placeholder="Nama Donatur / Instansi"
                  // helperText="Full width!"
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
                  // helperText="Full width!"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  size="small"
                />

                <TextField
                  id="alamat-donatur"
                  label="Alamat Donatur / Instansi"
                  style={{ margin: 8 }}
                  // helperText="Full width!"
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
            <ItemData changeHandlerItem={changeHandler} />
          </Grid>
          <Grid xs={12} item>
            <form>
              <Typography
                variant="p"
                component="h4"
                align="center"
                style={{ marginTop: 20 }}
              >
                Daftar Bantuan Masuk
              </Typography>
              <Table />
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
