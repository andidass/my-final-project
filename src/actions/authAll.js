import axios from "axios";
import { setAlert } from "./alert";
import {
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
} from "./types";
import setAuthToken from "../utils/setTokenAuth";
import jwt_decode from "jwt-decode";

// loaded user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    var decoded = jwt_decode(localStorage.token);
    if (decoded.user.role === "admin") {
      var res = await axios.get("/login/admin");
    }
    if (decoded.user.role === "petugas") {
      var res = await axios.get("/login/petugas");
    }
    if (decoded.user.role === "pos") {
      var res = await axios.get("/login/pos");
    }

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

// LOGIN USER
export const login = (usernameemail, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ usernameemail, password });

  try {
    const res = await axios.post("/login", body, config);

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
