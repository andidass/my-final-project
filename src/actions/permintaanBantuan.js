import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_PERMINTAAN_BANTUAN,
  PERMINTAAN_BANTUAN_ERROR,
  UPDATE_PERMINTAAN_BANTUAN,
  GET_ALL_PERMINTAAN_BANTUAN,
} from "./types";

//get data permintaan bantuan
export const getPermintaanBantuan = () => async (dispatch) => {
  try {
    const res = await axios.get("/posko/permintaan-bantuan/me");

    dispatch({
      type: GET_PERMINTAAN_BANTUAN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PERMINTAAN_BANTUAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get data permintaan bantuan
export const getAllPermintaanBantuan = () => async (dispatch) => {
  try {
    const res = await axios.get("/posko/permintaan-bantuan");

    dispatch({
      type: GET_ALL_PERMINTAAN_BANTUAN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PERMINTAAN_BANTUAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// create data permintaan bantuan
export const createPermintaanBantuan = (history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/posko/permintaan-bantuan", config);

    dispatch({
      type: GET_PERMINTAAN_BANTUAN,
      payload: res.data,
    });

    dispatch(
      setAlert("Data permintaan bantuan posko berhasil dibuat", "success")
    );
    history.push("/posko/permintaan-bantuan");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: PERMINTAAN_BANTUAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// put data permintaan bantuan
export const insertPermintaanBantuan = (dataPermintaan, history) => async (
  dispatch
) => {
  //! change it
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "/posko/permintaan-bantuan",
      dataPermintaan,
      config
    );

    dispatch({
      type: UPDATE_PERMINTAAN_BANTUAN,
      payload: res.data,
    });
    dispatch(
      setAlert("Data permintaan bantuan berhasil ditambahkan", "success")
    );
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: PERMINTAAN_BANTUAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete data permintaan bantuan
export const deletePermintaanBantuan = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/posko/permintaan-bantuan/${id}`);

    dispatch({
      type: UPDATE_PERMINTAAN_BANTUAN,
      payload: res.data,
    });
    dispatch(setAlert("Data permintaan bantuan berhasil dihapus", "success"));
  } catch (err) {
    dispatch({
      type: PERMINTAAN_BANTUAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
