import axios from "axios";
import { setAlert } from "./alert";
import { GET_PENGUNGSI, PENGUNGSI_ERROR, UPDATE_PENGUNGSI } from "./types";

//get pengungsi data
export const getPengungsi = () => async (dispatch) => {
  try {
    const res = await axios.get("/posko/pengungsi/me");

    dispatch({
      type: GET_PENGUNGSI,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PENGUNGSI_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get all pengungsi data
export const getAllDataPengungsi = () => async (dispatch) => {
  try {
    const res = await axios.get("/posko/pengungsi");

    dispatch({
      type: GET_PENGUNGSI,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PENGUNGSI_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// create data pengungsi
export const createPengungsi = (user, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/posko/pengungsi", config);

    dispatch({
      type: GET_PENGUNGSI,
      payload: res.data,
    });

    dispatch(setAlert("Data pengungsi posko berhasil dibuat", "success"));
    history.push("/posko/data-pengungsi");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: PENGUNGSI_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// put refugee
export const insertPengungsi = (dataPengungsi, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "/posko/pengungsi/input-pengungsi",
      dataPengungsi,
      config
    );

    dispatch({
      type: UPDATE_PENGUNGSI,
      payload: res.data,
    });
    dispatch(setAlert("Data pengungsi berhasil ditambahkan", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: PENGUNGSI_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete pengungsi
export const deletePengungsi = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/posko/pengungsi/input-pengungsi/${id}`);

    dispatch({
      type: UPDATE_PENGUNGSI,
      payload: res.data,
    });
    dispatch(setAlert("Data pengungsi berhasil dihapus", "success"));
  } catch (err) {
    dispatch({
      type: PENGUNGSI_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
