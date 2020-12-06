import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_LAPORAN_BENCANA,
  GET_ALL_LAPORAN_BENCANA,
  LAPORAN_BENCANA_ERROR,
  UPDATE_LAPORAN_BENCANA,
  CLEAR_LAPORAN_BENCANA,
} from "./types";

// get current data bencana
export const getCurrentDataBencana = () => async (dispatch) => {
  try {
    const res = await axios.get("/petugas/data-bencana/me");

    dispatch({
      type: GET_LAPORAN_BENCANA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LAPORAN_BENCANA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// get all data bencana
export const getAllDataBencana = () => async (dispatch) => {
  dispatch({ type: CLEAR_LAPORAN_BENCANA });
  try {
    const res = await axios.get("/petugas/data-bencana");

    dispatch({
      type: GET_ALL_LAPORAN_BENCANA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LAPORAN_BENCANA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// get data bencana by petugas id
export const getDataBencanaById = (petugasId) => async (dispatch) => {
  try {
    const res = await axios.get(`/petugas/data-bencana/${petugasId}`);

    dispatch({
      type: GET_LAPORAN_BENCANA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LAPORAN_BENCANA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// create or update profile
export const createDataBencana = (data, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/petugas/data-bencana", data, config);

    dispatch({
      type: UPDATE_LAPORAN_BENCANA,
      payload: res.data,
    });

    dispatch(
      setAlert(
        edit ? "Data bencana diupdate" : "Data bencana berhasil dibuat",
        "success"
      )
    );

    // jika profile baru dibuat, redirect
    if (!edit) {
      history.push("/petugas/data-bencana");
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: LAPORAN_BENCANA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
