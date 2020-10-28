import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { Typography, Grid, Box } from "@material-ui/core";

function Header() {
  return (
    <Grid
      container
      alignItems="center"
      className="header"
      justify="space-between"
    >
      <Grid xs={2} item align="left">
        <img
          src="https://i.ibb.co/tPt2DPz/logo-bulet-22-4.png"
          alt="logo bpbd"
        />
      </Grid>
      <Grid xs={8} item component={Link} to="/" className="link">
        <Typography component="div">
          <Box
            fontWeight="fontWeightBold"
            textAlign="center"
            fontSize={23}
            color="black"
          >
            Sistem Informasi Pendataan Bencana Dan Pendistribusian Bantuan
            Bencana Gempa Bumi
          </Box>
        </Typography>
        <Typography component="div" className="sub-title">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize={15}>
            BPBD PROVINSI NTB
          </Box>
        </Typography>
      </Grid>
      <Grid xs={2} item align="right">
        <img
          src="https://i.ibb.co/j8nZwQR/LOGO-UNRAM-BARU.png"
          alt="logo unram"
        />
      </Grid>
    </Grid>
  );
}

export default Header;
