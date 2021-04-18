import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/authAll";
import Alert from "../layout/Alert";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link as Linkes,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginAll = ({ login, auth: { user } }) => {
  const classes = useStyles();

  const [formLogin, setFormLogin] = useState({
    usernameemail: "",
    password: "",
  });

  const { usernameemail, password } = formLogin;

  const onChange = (e) =>
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(usernameemail, password);
  };

  // Redirect jika login success
  if (user && user.session == "petugas") {
    return <Redirect to="/petugas/dashboard" />;
  }

  if (user && user.session == "admin") {
    return <Redirect to="/admin/dashboard" />;
  }

  if (user && user.session == "pos") {
    return <Redirect to="/pos/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs" className="full-height">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login Sipendi
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="usernameemail"
            label="Username / Email Address"
            name="usernameemail"
            autoComplete="usernameemail"
            value={usernameemail}
            onChange={(e) => onChange(e)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => onChange(e)}
            autoComplete="current-password"
          />
          <Alert />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Masuk
          </Button>
        </form>
      </div>
    </Container>
  );
};

LoginAll.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(LoginAll);
