import React, { Fragment } from "react";
import { Button, Typography, Box } from "@material-ui/core";

const NoProfile = () => {
  return (
    <Fragment>
      <Typography component="div">
        <Box
          fontSize={18}
          fontWeight="fontWeightBold"
          textAlign="center"
          marginTop={3}
        >
          Profile posko belum ada, silahkan buat/update profile posko
        </Box>
      </Typography>
      <Button variant="contained" color="primary">
        Buat Profile
      </Button>
    </Fragment>
  );
};

export default NoProfile;
