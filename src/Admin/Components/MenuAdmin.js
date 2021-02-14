import React from "react";
import { Link } from "react-router-dom";

import { Grid, Box, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//icon material-ui
import AssignmentIcon from "@material-ui/icons/Assignment";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AccessibleIcon from "@material-ui/icons/Accessible";
import KitchenIcon from "@material-ui/icons/Kitchen";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PanToolIcon from "@material-ui/icons/PanTool";
import MapIcon from "@material-ui/icons/Map";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";

// import "./MenuPosko.css";

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
  padding: {
    paddingLeft: 50,
    paddingRight: 50,
  },
});

function MenuAdmin() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" className={classes.padding}>
        <Grid
          item
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/admin/bantuan-utama"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <KitchenIcon />
              <Typography component="div">
                <Box>Bantuan Utama</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/admin/data-pos"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <AssignmentIcon />
              <Typography component="div">
                <Box>Data Pos</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/admin/data-pengungsi"
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
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/admin/bantuan-masuk"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              {/* <InputIcon /> */}
              <ArrowDownwardIcon />
              <Typography component="div">
                <Box>Bantuan Masuk</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/admin/bantuan-keluar"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <ArrowUpwardIcon />
              <Typography component="div">
                <Box>Bantuan Keluar</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/admin/data-bantuan-pos"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <LocalHospitalIcon />
              <Typography component="div">
                <Box>Data Bantuan Pos</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/admin/permintaan-bantuan"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <PanToolIcon />
              <Typography component="div">
                <Box>Permintaan Bantuan</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/admin/map"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <MapIcon />
              <Typography component="div">
                <Box>Map</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/admin/data-bencana"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <BrokenImageIcon />
              <Typography component="div">
                <Box>Data Bencana</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MenuAdmin;
