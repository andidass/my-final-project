import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  GET_ALL_ACCOUNTS_PETUGAS,
  ACCOUNTS_PETUGAS_ERROR,
  //   CLEAR_PENGUNGSI,
  //   CLEAR_FASILITAS_POSKO,
  //   CLEAR_BANTUAN_MASUK,
} from "./types";
import setAuthToken from "../utils/setTokenAuth";

// loaded user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/petugas/login");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register Petugas
export const register = (
  { name, position, email, password },
  history
) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    name,
    position,
    email,
    password,
  });

  try {
    const res = await axios.post("/petugas/registrasi", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    // dispatch(loadUser());
    dispatch(
      setAlert("Akun Petugas Pendata Bencana Berhasil Dibuat", "success")
    );
    history.push("/admin/registrasi-akun/data-akun-petugas");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// LOGIN USER
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/petugas/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("Login Sukses", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error", 4000)));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const getAllAccountsPetugas = () => async (dispatch) => {
  try {
    const res = await axios.get("/petugas/login/all-accounts-petugas");
    dispatch({
      type: GET_ALL_ACCOUNTS_PETUGAS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ACCOUNTS_PETUGAS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// LOGOUT (clear profile)
export const logout = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  //   dispatch({ type: CLEAR_PENGUNGSI });
  //   dispatch({ type: CLEAR_BANTUAN_MASUK });
  //   dispatch({ type: CLEAR_FASILITAS_POSKO });
  // dispatch(loadUser());
};
