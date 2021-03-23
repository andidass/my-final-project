import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Alert from "../../layout/Alert";

import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// @materialui
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
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

function Registrasi({ setAlert, register, isAuthenticated, history }) {
  const classes = useStyles();
  const [formRegister, setFormRegister] = useState({
    name: "", // nama posko
    usernameposko: "",
    petugas: "",
    position: "",
    password: "",
    password2: "",
  });

  if (!isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password harus sama", "error");
    } else {
      register({ name, usernameposko, petugas, password, position }, history);
      setFormRegister({
        name: "", // nama posko
        usernameposko: "",
        petugas: "",
        position: "",
        password: "",
        password2: "",
      });
    }
  };

  const onChange = (e) =>
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });

  const {
    name,
    usernameposko,
    position,
    petugas,
    password,
    password2,
  } = formRegister;

  return (
    <Fragment>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/admin/registrasi-akun/data-akun-pos">Kembali</Link>
      </Button>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrasi Pos Pengungsian
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => onSubmit(e)}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nama Pos"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              type="text"
              autoComplete="namaposko"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usernameposko"
              label="Username Pos"
              name="usernameposko"
              value={usernameposko}
              onChange={(e) => onChange(e)}
              type="text"
              autoComplete="usernameposko"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="petugas"
              label="Nama Petugas Penanggung Jawab Pos"
              name="petugas"
              type="text"
              autoComplete="petugas"
              value={petugas}
              onChange={(e) => onChange(e)}
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
          </form>
        </div>
      </Container>
    </Fragment>
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
