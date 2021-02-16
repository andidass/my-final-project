import React from "react";
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
  user,
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
      to={
        !user
          ? `/permintaan-bantuan/${_id}`
          : `/admin/permintaan-bantuan/${_id}`
      }
      className="link"
    >
      <Card
        className="root"
        style={{ borderRadius: `15px` }}
        variant="outlined"
      >
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
