import React from "react";
import { Link } from "react-router-dom";

import { Grid, Box, Typography, Card, CardContent } from "@material-ui/core";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import "./style.css";

const DataBencana = ({
  dataBencana: {
    petugas: { _id, name },
  },
}) => {
  return (
    <Grid
      item
      lg={2}
      component={Link}
      to={`/admin/data-bencana/${_id}`}
      className="link"
    >
      <Card className="root" variant="outlined">
        <CardContent className="card">
          <RecordVoiceOverIcon />
          <Typography component="div">
            <Box>{name}</Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DataBencana;
