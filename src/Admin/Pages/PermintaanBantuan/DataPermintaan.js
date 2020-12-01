import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Badge,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
// import "./DataPosko.css";

const DataPermintaan = ({
  dataPermintaan: {
    user: { _id, name },
    dataPermintaanBantuan,
  },
}) => {
  return (
    <Grid
      item
      lg={2}
      component={Link}
      to={`/admin/permintaan-bantuan/${_id}`}
      className="link"
    >
      <Card className="root" variant="outlined">
        <CardContent className="card">
          <Badge badgeContent={dataPermintaanBantuan.length} color="secondary">
            <HomeIcon />
          </Badge>
          <Typography component="div">
            <Box>{name}</Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DataPermintaan;
