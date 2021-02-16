import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, Card, CardContent } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import "./style.css";

const useStyles = makeStyles({
  root: {
    minWidth: 160,
    textAlign: "center",
    backgroundColor: "#3f51b5",
    color: "white",
    radius: 100,
    fontSize: 15,
    margin: 5,
    borderRadius: 15,
  },
});

const DataPos = ({ user, name: { _id, name } }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      lg={2}
      component={Link}
      // to={`/admin/data-pos/${_id}`}
      to={!user ? `/data-bantuan-pos/${_id}` : `/admin/data-bantuan-pos/${_id}`}
      className="link"
    >
      <Card className={classes.root} variant="outlined">
        <CardContent className="card">
          <HomeIcon size="large" />
          <Typography component="div">
            <Box>{name}</Box>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DataPos;
