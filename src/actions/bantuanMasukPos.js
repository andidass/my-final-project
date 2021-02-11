import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_BANTUAN_MASUK,
  GET_ALL_BANTUAN_MASUK,
  BANTUAN_MASUK_ERROR,
  UPDATE_BANTUAN_MASUK,
  CLEAR_BANTUAN_MASUK,
} from "./types";

//get data bantuan masuk
export const getBantuanMasuk = () => async (dispatch) => {
  try {
    const res = await axios.get("/pos/bantuan-masuk/me");

    dispatch({
      type: GET_BANTUAN_MASUK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BANTUAN_MASUK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getAllDataBantuanMasuk = () => async (dispatch) => {
  dispatch({
    type: CLEAR_BANTUAN_MASUK,
  });
  try {
    const res = await axios.get("/pos/bantuan-masuk");
    dispatch({
      type: GET_ALL_BANTUAN_MASUK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BANTUAN_MASUK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// get data bantuan masuk by id
export const getBantuanMasukById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/pos/bantuan-masuk/${userId}`);

    dispatch({
      type: GET_BANTUAN_MASUK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BANTUAN_MASUK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// create data bantuan masuk
export const createBantuanMasuk = (dataInit) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/pos/bantuan-masuk", dataInit, config);

    dispatch({
      type: UPDATE_BANTUAN_MASUK,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: BANTUAN_MASUK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// put data bantuan masuk
export const insertBantuanMasuk = (dataInit, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "/pos/bantuan-masuk/input-bantuan-masuk",
      dataInit,
      config
    );

    dispatch({
      type: UPDATE_BANTUAN_MASUK,
      payload: res.data,
    });
    dispatch(setAlert("Data bantuan masuk berhasil ditambahkan", "success"));
    history.push("/pos/bantuan-masuk");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: BANTUAN_MASUK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
