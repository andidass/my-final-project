import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import Table from "../Components/Table";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";

import Header from "../../Components/Header";
import MenuBar from "../Components/MenuBar";
import ItemData from "../Components/ItemData";
import InitData from "../Components/InitData";

import "./BantuanMasukPosko.css";

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

  return (
    <React.Fragment>
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
            {/* ------------------------ InitData.js -----------------------*/}
            <InitData />
          </Grid>
          <Grid xs={12} sm={6} item>
            {/* ------------------------ ItemData.js -----------------------*/}
            <ItemData addItem={addItem} row={rows} />
          </Grid>
          <Grid xs={12} item>
            <form>
              {/* ---------------------- TABLE.JS -------------------------- */}
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
    </React.Fragment>
  );
}

export default BantuanMasukPosko;
