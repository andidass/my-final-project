import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_BANTUAN_KELUAR,
  GET_ALL_BANTUAN_KELUAR,
  BANTUAN_KELUAR_ERROR,
  UPDATE_BANTUAN_KELUAR,
  CLEAR_BANTUAN_KELUAR,
} from "./types";

//get data bantuan keluar
export const getBantuanKeluar = () => async (dispatch) => {
  try {
    const res = await axios.get("/admin/bantuan-keluar/me");

    dispatch({
      type: GET_BANTUAN_KELUAR,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BANTUAN_KELUAR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getAllDataBantuanKeluar = () => async (dispatch) => {
  dispatch({
    type: CLEAR_BANTUAN_KELUAR,
  });
  try {
    const res = await axios.get("/admin/bantuan-keluar");
    dispatch({
      type: GET_ALL_BANTUAN_KELUAR,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BANTUAN_KELUAR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// get data bantuan keluar by id
export const getBantuanKeluarById = (itemId) => async (dispatch) => {
  try {
    const res = await axios.get(`/admin/bantuan-keluar/${itemId}`);

    dispatch({
      type: GET_BANTUAN_KELUAR,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BANTUAN_KELUAR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// create data bantuan masuk
export const createBantuanKeluar = (dataInit) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/admin/bantuan-keluar", dataInit, config);

    dispatch({
      type: UPDATE_BANTUAN_KELUAR,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: BANTUAN_KELUAR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// put data bantuan masuk
export const insertBantuanKeluar = (dataInit, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "/admin/bantuan-keluar/input-bantuan-keluar",
      dataInit,
      config
    );

    dispatch({
      type: UPDATE_BANTUAN_KELUAR,
      payload: res.data,
    });
    dispatch(setAlert("Data bantuan keluar berhasil ditambahkan", "success"));
    history.push("/admin/bantuan-keluar/data");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: BANTUAN_KELUAR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
