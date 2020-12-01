import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Grid, Box, Typography, Card, CardContent } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import Spinner from "../../../Components/Spinner";
import "./DataPosko.css";

const DataPosko = ({
  profile: {
    user: { _id, name },
    petugas,
    location,
    alamatPosko,
    kecPosko,
    kelPosko,
    allPetugas,
  },
}) => {
  return (
    <Grid
      item
      lg={2}
      component={Link}
      to={`/admin/data-posko/${_id}`}
      className="link"
    >
      <Card className="root" variant="outlined">
        <CardContent className="card">
          <HomeIcon />
          <Typography component="div">
            <Box>{name}</Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

DataPosko.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default DataPosko;
