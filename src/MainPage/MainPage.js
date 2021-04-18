import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MapMain from "./MapMain";
import Modal from "../Components/Modal";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import PanToolIcon from "@material-ui/icons/PanTool";
import ReportIcon from "@material-ui/icons/Report";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

const useStyles = makeStyles({
  root: {
    minWidth: `125px`,
    minHeight: `110px`,
    backgroundColor: "#3f51b5",
    color: "white",
    height: `100%`,
    width: `100%`,
    textTransform: "uppercase",
    borderRadius: 15,
  },
});

export default function MainPage() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const klikLogin = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <Fragment>
      <Modal open={open} setOpen={setOpen} />
      <Grid
        container
        style={{ textAlign: "center", padding: `2%` }}
        // spacing={2}
      >
        <Grid
          item
          xs={12}
          md={6}
          container
          spacing={2}
          style={{ paddingRight: `1%`, paddingLeft: `1%` }}
        >
          {/* <img src="/bpbd-logo.png" alt="React Logo" style={{ width: `40%` }} /> */}
          <Grid item xs={12} className="link">
            <Card variant="outlined" style={{ width: `100%` }}>
              <CardContent>
                <Typography component="div">
                  <Box>
                    Selamat datang, bencana terjadi terkini adalah
                    <br /> <b>Gempa Bumi</b>
                  </Box>
                  <Box>Anda petugas? Silahkan Login disini</Box>
                  <Link to="./login">
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ minWidth: 150 }}
                      // onClick={(e) => klikLogin(e)}
                    >
                      LOGIN PETUGAS
                    </Button>
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={6}
            sm={4}
            component={Link}
            to="/data-pos"
            className="link"
          >
            <Card variant="outlined" className={classes.root}>
              <CardContent>
                <HomeIcon fontSize="large" />
                <Typography variant="h6">
                  <Box>
                    Data <br />
                    Pos
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={6}
            sm={4}
            component={Link}
            to="/data-pengungsi"
            className="link"
          >
            <Card variant="outlined" className={classes.root}>
              <CardContent>
                <EmojiPeopleIcon fontSize="large" />
                <Typography variant="h6">
                  <Box>
                    Data <br />
                    Pengungsi
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={6}
            sm={4}
            component={Link}
            to="/data-bantuan"
            className="link"
          >
            <Card variant="outlined" className={classes.root}>
              <CardContent>
                <ListAltIcon fontSize="large" />
                <Typography variant="h6">
                  <Box>
                    Data <br />
                    Bantuan
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={6}
            sm={4}
            component={Link}
            to="/data-laporan-bencana"
            className="link"
          >
            <Card variant="outlined" className={classes.root}>
              <CardContent>
                <ReportIcon fontSize="large" />
                <Typography variant="h6">
                  <Box>
                    laporan <br />
                    Bencana
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={6}
            sm={4}
            component={Link}
            to="/permintaan-bantuan"
            className="link"
          >
            <Card variant="outlined" className={classes.root}>
              <CardContent>
                <PanToolIcon fontSize="large" />
                <Typography variant="h6">
                  <Box>
                    Permintaan <br />
                    Bantuan
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={6}
            sm={4}
            component={Link}
            to="/info-dan-donasi"
            className="link"
          >
            <Card variant="outlined" className={classes.root}>
              <CardContent>
                <AccountBalanceWalletIcon fontSize="large" />
                <Typography variant="h6">
                  <Box>
                    INFO &<br />
                    DONASI
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} style={{ paddingLeft: `1%` }}>
          <Typography variant="h6">
            <Box>Titik Lokasi Pos Pengungsian</Box>
          </Typography>
          <div style={{ width: "100%", height: "70vh" }}>
            <MapMain />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
