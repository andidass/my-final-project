import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Alert from "../../layout/Alert";

import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

// @materialui
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
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Registrasi({ setAlert, register, isAuthenticated }) {
  const classes = useStyles();
  const [formRegister, setFormRegister] = useState({
    name: "",
    position: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password harus sama", "error");
    } else {
      register({ name, email, password, position });
    }
  };

  const onChange = (e) =>
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });

  // Redirect jika login success
  if (isAuthenticated) {
    return <Redirect to="/posko/dashboard" />;
  }

  const { name, position, email, password, password2 } = formRegister;

  return (
    <Container component="main" maxWidth="xs" className="full-height">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrasi Posko Pengungsian
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nama Lengkap"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            type="text"
            autoComplete="namappengguna"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="position"
            label="Jabatan"
            name="position"
            type="text"
            autoComplete="position"
            value={position}
            onChange={(e) => onChange(e)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Alamat Email"
            name="email"
            type="email"
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
            label="Kata Sandi"
            type="password"
            id="password"
            value={password}
            onChange={(e) => onChange(e)}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Ulangi Kata Sandi"
            type="password"
            id="password2"
            value={password2}
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
            onSubmit={(e) => onSubmit(e)}
          >
            Daftar
          </Button>
          <Grid container>
            <Grid item>
              <Link to="./login">
                <Linkes variant="body2">{"Sudah memiliki akun? login"}</Linkes>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

Registrasi.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Registrasi);
