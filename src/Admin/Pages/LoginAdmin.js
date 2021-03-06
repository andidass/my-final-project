import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authAdmin";
import Alert from "../../layout/Alert";
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

const LoginAdmin = ({ login, auth: { user, token } }) => {
  const classes = useStyles();

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formLogin;

  const onChange = (e) =>
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect jika login success
  if (user) {
    return <Redirect to="/admin/dashboard" />;
  }

  if (token === null) {
    return <Redirect to="/login" />;
  }

  return (
    <Container component="main" maxWidth="xs" className="full-height">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login Admin
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
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
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Ingatkan saya"
          /> */}
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
            <Grid item xs>
              {/* <Link to="#">
                <Linkes variant="body2">{"Lupa Kata Sandi"}</Linkes>
              </Link> */}
            </Grid>
            <Grid item>
              <Link to="./registrasi">
                <Linkes variant="body2">
                  {"Belum memiliki akun? Registrasi"}
                </Linkes>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

LoginAdmin.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(LoginAdmin);
