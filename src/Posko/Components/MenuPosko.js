import React from "react";
import { Link } from "react-router-dom";

import { Grid, Box, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//icon material-ui
import AssignmentIcon from "@material-ui/icons/Assignment";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AccessibleIcon from "@material-ui/icons/Accessible";
import HomeIcon from "@material-ui/icons/Home";
import PanToolIcon from "@material-ui/icons/PanTool";

import "./MenuPosko.css";

const useStyles = makeStyles({
  root: {
    minWidth: 160,
    minHeight: 100,
    // maxWidth: 250,
    textAlign: "center",
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: 15,
    margin: 5,
    borderRadius: 15,
  },
  padding: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
  },
});

function MenuPosko() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" className={classes.padding}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={2}
          component={Link}
          to="/pos/data-pos"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <HomeIcon fontSize="large" />
              <Typography component="div">
                <Box>Data Pos</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={2}
          component={Link}
          to="/pos/fasilitas-pos"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <AssignmentIcon fontSize="large" />
              <Typography component="div">
                <Box>Fasilitas Pos</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={2}
          component={Link}
          to="/pos/data-pengungsi"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <AccessibleIcon fontSize="large" />
              <Typography component="div">
                <Box>Data Pengungsi</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={2}
          component={Link}
          to="/pos/bantuan-masuk"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <ArrowDownwardIcon fontSize="large" />
              <Typography component="div">
                <Box>Bantuan Masuk</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={2}
          component={Link}
          to="/pos/bantuan-keluar"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <ArrowUpwardIcon fontSize="large" />
              <Typography component="div">
                <Box>Bantuan Keluar</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={2}
          component={Link}
          to="/pos/permintaan-bantuan"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <PanToolIcon fontSize="large" />
              <Typography component="div">
                <Box>Permintaan Bantuan</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MenuPosko;
