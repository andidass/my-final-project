import React, { Fragment } from "react";
import { Typography, Box, Avatar } from "@material-ui/core";
import "./footer.css";

function Footer() {
  return (
    <Fragment>
      <div className="footer">
        <Typography component="div" display="inline">
          <Box>Developer : Andi Ardhian (F1B015009)</Box>
        </Typography>
        <Typography component="div" display="inline">
          <Box>Github : github.com/andidass</Box>
        </Typography>
      </div>
    </Fragment>
  );
}

export default Footer;
