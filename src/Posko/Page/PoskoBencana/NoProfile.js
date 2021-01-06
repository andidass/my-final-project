import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const NoProfile = () => {
  return (
    <div className="full-height isi">
      <Typography variant="h5">
        <Box fontSize={12} textAlign="left" marginTop={3}>
          Pos ini belum memiliki profile
        </Box>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="small"
        disableRipple
        component={Link}
        to="/pos/data-pos/form-profile"
        startIcon={<PersonIcon />}
      >
        Buat Profile
      </Button>
    </div>
  );
};

export default NoProfile;
