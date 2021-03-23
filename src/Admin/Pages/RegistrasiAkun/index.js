import React, { Fragment } from "react";
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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AddLocationIcon from "@material-ui/icons/AddLocation";

const useStyles = makeStyles({
  root: {
    minWidth: 160,
    minHeight: 130,
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

const MenuRegisAkun = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Registrasi Akun</Typography>
        <Typography variant="subtitle2">
          Menu Registrasi Akun Pos Pengungsian / Petugas Lapangan
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/admin/dashboard">Kembali</Link>
      </Button>
      <Grid container justify="center" className={classes.padding}>
        <Grid
          item
          xs={12}
          xl={6}
          sm={4}
          lg={2}
          component={Link}
          to="/admin/registrasi-akun/data-akun-pos"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <AddLocationIcon fontSize="large" />
              <Typography component="div">
                <Box>
                  Registrasi Akun <br />
                  Pos
                </Box>
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
          to="/admin/registrasi-akun/data-akun-petugas"
          className="link"
        >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <GroupAddIcon fontSize="large" />
              <Typography component="div">
                <Box>
                  Registrasi Akun <br />
                  Petugas
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MenuRegisAkun;
