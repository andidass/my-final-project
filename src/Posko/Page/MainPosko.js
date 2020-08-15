import React from "react";

import MenuBar from "../Components/MenuBar";
import MenuPosko from "../Components/MenuPosko";

import { Typography, Box } from "@material-ui/core";

function MainPosko() {
  return (
    <React.Fragment>
      <div className="main-container">
        <MenuBar />
        <Typography component="div">
          <Box
            textAlign="center"
            fontSize={20}
            fontWeight="fontWeightBold"
            marginTop={4}
            color="red"
          >
            Posko 1 Desa A
          </Box>
        </Typography>
        <MenuPosko />
      </div>
    </React.Fragment>
  );
}

export default MainPosko;
