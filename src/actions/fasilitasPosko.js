import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_FASILITAS_POSKO,
  GET_ALL_FASILITAS_POSKO,
  FASILITAS_POSKO_ERROR,
  UPDATE_FASILITAS_POSKO,
  CLEAR_FASILITAS_POSKO,
} from "./types";

// get data fasilitas posko user
export const getDataFasilitasPosko = () => async (dispatch) => {
  try {
    const res = await axios.get("/posko/fasilitas-posko/me");

    dispatch({
      type: GET_FASILITAS_POSKO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FASILITAS_POSKO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// get data all data fasilitas posko
export const getAllDataFasilitasPosko = () => async (dispatch) => {
  dispatch({ type: CLEAR_FASILITAS_POSKO });
  try {
    const res = await axios.get("/posko/fasilitas-posko");

    dispatch({
      type: GET_ALL_FASILITAS_POSKO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FASILITAS_POSKO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// get data fasilitas posko by userId
export const getDataFasilitasPoskoByUserId = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/posko/fasilitas-posko/${userId}`);

    dispatch({
      type: GET_FASILITAS_POSKO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FASILITAS_POSKO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// create or update profile
export const createFasilitasPosko = (
  dataFasilitasPosko,
  history,
  edit = false
) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "/posko/fasilitas-posko",
      dataFasilitasPosko,
      config
    );

    dispatch({
      type: UPDATE_FASILITAS_POSKO,
      payload: res.data,
    });

    dispatch(
      setAlert(
        edit
          ? "Data fasilitas poskso diupdate"
          : "data fasilitas posko berhasil dibuat",
        "success"
      )
    );

    // jika data baru dibuat, redirect
    if (!edit) {
      history.push("/posko/fasilitas-posko");
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: FASILITAS_POSKO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
