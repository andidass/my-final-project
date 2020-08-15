import React from "react";
import MenuBar from "../../Components/MenuBar";
import DataPosko from "./DataPosko";
import DataPetugas from "./DataPetugas";

import { Grid, Paper, Typography, Box } from "@material-ui/core";

import "./PoskoBencana.css";
const PoskoBencana = () => {
  return (
    <React.Fragment>
      <MenuBar />
      <Typography component="div">
        <Box
          fontSize={18}
          fontWeight="fontWeightBold"
          textAlign="center"
          marginTop={3}
        >
          Posko Bencana
        </Box>
      </Typography>
      <Paper variant="outlined" className="body-posko-bencana">
        <Grid container>
          <Grid xs={12} sm={6} item>
            <DataPosko />
          </Grid>
          <Grid xs={12} sm={6} item>
            <DataPetugas />
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default PoskoBencana;
