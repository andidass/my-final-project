import React from "react";

import "./Header.css";
import { Typography, Grid } from "@material-ui/core";

function Header() {
  return (
    <Grid container alignItems="center" className="header">
      <Grid xs={2} item align="left">
        <img src="bpbd-logo.png" alt="logo bpbd" />
      </Grid>
      <Grid xs={8} item>
        <Typography align="center" component="h2" variant="p" className="title">
          Sistem Informasi Pendataan Bencana Dan Pendistribusian Bantuan Bencana
          Gempa Bumi
        </Typography>
        <Typography
          align="center"
          component="h4"
          variant="p"
          className="sub-title"
        >
          BPBD PROVINSI NTB
        </Typography>
      </Grid>
      <Grid xs={2} item align="right">
        <img src="unram-logo.png" alt="logo unram" />
      </Grid>
    </Grid>
  );
}

export default Header;
