import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "../../layout/Alert";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
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

const SignIn = ({ login, auth: { user } }) => {
  const classes = useStyles();

  const [formLogin, setFormLogin] = useState({
    usernameposko: "",
    password: "",
  });

  const { usernameposko, password } = formLogin;

  const onChange = (e) =>
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(usernameposko, password);
  };

  // Redirect jika login success
  if (user) {
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
          Login Pos Pengungsian
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="usernameposko"
            name="usernameposko"
            label="Username Pos"
            autoComplete="usernameposko"
            value={usernameposko}
            onChange={(e) => onChange(e)}
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
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
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link to="/pos/registrasi">
                <Linkes variant="body2">
                  {"Belum memiliki akun kah? Registrasi"}
                </Linkes>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(SignIn);
