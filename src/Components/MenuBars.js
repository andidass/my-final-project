import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Badge,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
// import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root2: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

const MenuBars = ({ auth: { user, isAuthenticated, loading }, logout }) => {
  const classes = useStyles();

  const authLinks = (
    <Grid container alignItems="center">
      <Grid item>
        {user && user.session === "pos" && (
          <Fragment>
            <Link className={classes.root2} to="/pos">
              <Avatar
                alt="BPBD NTB"
                src="https://i.ibb.co/tPt2DPz/logo-bulet-22-4.png"
              />
              <Avatar
                alt="Universitas Mataram"
                src="https://i.ibb.co/j8nZwQR/LOGO-UNRAM-BARU.png"
              />
            </Link>
          </Fragment>
        )}
        {user && user.session === "admin" && (
          <Fragment>
            <Link className={classes.root2} to="/admin">
              <Avatar
                alt="BPBD NTB"
                src="https://i.ibb.co/tPt2DPz/logo-bulet-22-4.png"
              />
              <Avatar
                alt="Universitas Mataram"
                src="https://i.ibb.co/j8nZwQR/LOGO-UNRAM-BARU.png"
              />
            </Link>
          </Fragment>
        )}
        {user && user.session === "petugas" && (
          <Fragment>
            <Link className={classes.root2} to="/petugas">
              <Avatar
                alt="BPBD NTB"
                src="https://i.ibb.co/tPt2DPz/logo-bulet-22-4.png"
              />
              <Avatar
                alt="Universitas Mataram"
                src="https://i.ibb.co/j8nZwQR/LOGO-UNRAM-BARU.png"
              />
            </Link>
          </Fragment>
        )}
        {!user && (
          <Fragment>
            <Link className={classes.root2} to="/main-page">
              <Avatar
                alt="BPBD NTB"
                src="https://i.ibb.co/tPt2DPz/logo-bulet-22-4.png"
              />
              <Avatar
                alt="Universitas Mataram"
                src="https://i.ibb.co/j8nZwQR/LOGO-UNRAM-BARU.png"
              />
            </Link>
          </Fragment>
        )}
      </Grid>
      <Grid item xs></Grid>
      <Grid item>
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <NotificationsNoneIcon fontSize="small" />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={3} color="primary">
            <ChatBubbleOutlineIcon fontSize="small" />
          </Badge>
        </IconButton>
        <IconButton onClick={logout}>
          <PowerSettingsNewIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );

  const guestLinks = (
    <Grid container alignItems="center" justify="space-around" spacing={3}>
      <Grid item to="/">
        <Link className={classes.root2} to="/main-page">
          <Avatar
            alt="BPBD NTB"
            src="https://i.ibb.co/tPt2DPz/logo-bulet-22-4.png"
          />
          <Avatar
            alt="Universitas Mataram"
            src="https://i.ibb.co/j8nZwQR/LOGO-UNRAM-BARU.png"
          />
        </Link>
      </Grid>
      <Grid item>
        <Typography
          variant="subtitle1"
          style={{ color: "black", possition: "center", textAlign: "center" }}
        >
          Sistem Informasi Pendataan Bencana dan Pendistribusian Bantuan Bencana
          BPBD NTB
        </Typography>
      </Grid>
      <Grid item sm></Grid>
    </Grid>
  );

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

MenuBars.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(MenuBars);
