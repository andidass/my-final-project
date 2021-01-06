import React from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//icon material-ui
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
  root: {
    minWidth: 160,
    minHeight: 115,
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

function MenuLaporanBencana() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Menu Data Kejadian Bencana</Typography>
        <Typography variant="subtitle2">
          Catatan Data Kejadian Bencana (Berdasarkan Perka 89)
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/petugas/dashboard">Kembali</Link>
      </Button>
      <Grid container justify="center" className={classes.padding}>
        <Grid
          item
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/petugas/data-bencana/kejadian-bencana"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <HomeIcon />
              <Typography component="div">
                <Box>Kejadian Bencana</Box>
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
          to="/petugas/data-bencana/fasum-penanganan"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <AssignmentIcon />
              <Typography component="div">
                <Box>Fasilitas & Penanganan</Box>
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
          to="/petugas/data-bencana/korban-jiwa"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <AssignmentIcon />
              <Typography component="div">
                <Box>Korban Jiwa</Box>
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
          to="/petugas/data-bencana/kerusakan"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <AssignmentIcon />
              <Typography component="div">
                <Box>Data Kerusakan</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MenuLaporanBencana;
