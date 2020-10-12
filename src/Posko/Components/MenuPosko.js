import React from "react";
import { Link } from "react-router-dom";

import { Grid, Box, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//icon material-ui
import AssignmentIcon from "@material-ui/icons/Assignment";
import InputIcon from "@material-ui/icons/Input";
import AccessibleIcon from "@material-ui/icons/Accessible";
import HomeIcon from "@material-ui/icons/Home";
import PanToolIcon from "@material-ui/icons/PanTool";

import "./MenuPosko.css";

const useStyles = makeStyles({
  root: {
    minWidth: 160,
    textAlign: "center",
    backgroundColor: "#3f51b5",
    color: "white",
    radius: 100,
    fontSize: 15,
    margin: 5,
  },
  padding: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50,
  },
});

function MenuPosko() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" className={classes.padding}>
        <Grid
          item
          xs={16}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/posko/data-posko"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <HomeIcon />
              <Typography component="div">
                <Box>Data Posko</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={16}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/posko/fasilitas-posko"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <AssignmentIcon />
              <Typography component="div">
                <Box>Fasilitas Posko</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={16}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/posko/data-pengungsi"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <AccessibleIcon />
              <Typography component="div">
                <Box>Data Pengungsi</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={16}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/posko/bantuan-masuk"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <InputIcon />
              <Typography component="div">
                <Box>Bantuan Masuk</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={16}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/posko/bantuan-keluar"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <InputIcon />
              <Typography component="div">
                <Box>Bantuan Keluar</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={16}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/posko/permintaan-bantuan"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <PanToolIcon />
              <Typography component="div">
                <Box>Request Bantuan</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MenuPosko;
