import React, { Fragment } from "react";
import DataPosko from "./DataPosko";
import DataPetugas from "./DataPetugas";

import { Grid, Paper, Typography, Box } from "@material-ui/core";

const FormProfile = () => {
  return (
    <div className="full-height">
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
    </div>
  );
};

export default FormProfile;
