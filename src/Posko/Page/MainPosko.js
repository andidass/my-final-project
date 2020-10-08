import React, { Fragment } from "react";
import MenuPosko from "../Components/MenuPosko";

import { Typography, Box } from "@material-ui/core";

const MainPosko = () => {
  return (
    <Fragment>
      <div className="main-container">
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
    </Fragment>
  );
};

export default MainPosko;
