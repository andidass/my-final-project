import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { Typography, Grid, Box } from "@material-ui/core";

function Header() {
  return (
    <Grid container alignItems="center" className="header">
      <Grid xs={2} item align="left">
        <img
          src="https://bpbd.ntbprov.go.id/sites/default/files/styles/medium/public/field/image/logo%20bulet_22_4.png?itok=ARUavpii"
          alt="logo bpbd"
        />
      </Grid>
      <Grid xs={8} item component={Link} to="/" className="link">
        <Typography component="div">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize={20}>
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
          src="https://lh3.googleusercontent.com/proxy/IIZJKm_NZsMLabI5EgSlAjKgvFyajdGstvJygyWd9zbBAxzSF19vHyK1-IWgN5qxclvB10Y8yGzN_2eWG5Q3bFCxAANrLUhEOqT0YA9FoU5g_4FHyng-nyf00H3jGrZsFTcu0M6q"
          alt="logo unram"
        />
      </Grid>
    </Grid>
  );
}

export default Header;
