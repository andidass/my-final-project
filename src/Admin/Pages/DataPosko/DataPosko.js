import React from "react";
import { Link } from "react-router-dom";

import { Grid, Box, Typography, Card, CardContent } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import "./DataPosko.css";

const DataPosko = ({
  user,
  profile: {
    user: { _id, name },
  },
}) => {
  return (
    <Grid
      item
      lg={2}
      component={Link}
      // to={`/admin/data-pos/${_id}`}
      to={!user ? `/data-pos/${_id}` : `/admin/data-pos/${_id}`}
      className="link"
    >
      <Card
        className="root"
        style={{ borderRadius: `15px` }}
        variant="outlined"
      >
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

export default DataPosko;
