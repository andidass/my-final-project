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
  CLEAR_PENGUNGSI,
  CLEAR_FASILITAS_POSKO,
  CLEAR_BANTUAN_MASUK,
  CLEAR_LAPORAN_BENCANA,
  CLEAR_PROFILE_PETUGAS,
  CLEAR_LAPORAN_HARIAN,
  CLEAR_PERMINTAAN_BANTUAN,
  CLEAR_PROFILE_ADMIN,
  CLEAR_BANTUAN_UTAMA,
  CLEAR_BANTUAN_KELUAR,
  GET_ALL_ACCOUNTS_POS,
  ACCOUNTS_POS_ERROR,
} from "./types";
import setAuthToken from "../utils/setTokenAuth";

// loaded user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/pos/login");
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

// Register Posko
export const register = (
  { name, usernameposko, petugas, password, position },
  history
) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    name,
    password,
    usernameposko,
    petugas,
    position,
  });

  try {
    const res = await axios.post("/pos/registrasi", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    // dispatch(loadUser());
    dispatch(setAlert("Akun Pos Pengungsian Berhasil Dibuat", "success"));
    history.push("/admin/registrasi-akun/data-akun-pos");
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
export const login = (usernameposko, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ usernameposko, password });
  try {
    const res = await axios.post("/pos/login", body, config);
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

export const getAllAccountsPos = () => async (dispatch) => {
  try {
    const res = await axios.get("/pos/login/all-accounts-pos");
    dispatch({
      type: GET_ALL_ACCOUNTS_POS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ACCOUNTS_POS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// LOGOUT (clear profile)
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: CLEAR_PROFILE_ADMIN });
  dispatch({ type: CLEAR_PENGUNGSI });
  dispatch({ type: CLEAR_BANTUAN_MASUK });
  dispatch({ type: CLEAR_BANTUAN_KELUAR });
  dispatch({ type: CLEAR_BANTUAN_UTAMA });
  dispatch({ type: CLEAR_FASILITAS_POSKO });
  dispatch({ type: CLEAR_PROFILE_PETUGAS });
  dispatch({ type: CLEAR_LAPORAN_BENCANA });
  dispatch({ type: CLEAR_LAPORAN_HARIAN });
  dispatch({ type: CLEAR_PERMINTAAN_BANTUAN });
};
