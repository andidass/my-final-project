import React, { Fragment } from "react";
import Count from "./Count";

import { Button, Typography, Box, Paper, Grid } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const FasilitasPosko = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);

  return (
    <Fragment>
      <div className="isi full-height">
        <Typography component="div">
          <Box
            fontSize={18}
            fontWeight="fontWeightBold"
            textAlign="center"
            marginTop={3}
          >
            Fasilitas Posko
          </Box>
        </Typography>
        <Paper variant="outlined" className="body-posko-bencana">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className="body-posko-bencana" style={{ display: "block" }}>
                <Count count={count} setCount={setCount}>
                  Rumah Sakit :
                </Count>
                <Count count={count2} setCount={setCount2}>
                  MCK :
                </Count>
                <Count count={count3} setCount={setCount3}>
                  Dapur Umum :
                </Count>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<SaveIcon />}
                >
                  Simpan
                </Button>
              </div>
            </Grid>
            <Grid xs={12} sm={6} item>
              <h1>2</h1>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Fragment>
  );
};

export default FasilitasPosko;
