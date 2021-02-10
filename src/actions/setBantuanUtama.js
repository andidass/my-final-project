import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_BANTUAN_UTAMA,
  GET_ALL_BANTUAN_UTAMA,
  BANTUAN_UTAMA_ERROR,
  UPDATE_BANTUAN_UTAMA,
} from "./types";

//get data permintaan bantuan
export const getBantuanUtama = () => async (dispatch) => {
  try {
    const res = await axios.get("/admin/bantuan-utama/me");

    dispatch({
      type: GET_BANTUAN_UTAMA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BANTUAN_UTAMA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getAllBantuanUtama = () => async (dispatch) => {
  try {
    const res = await axios.get("/admin/bantuan-utama");

    dispatch({
      type: GET_ALL_BANTUAN_UTAMA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BANTUAN_UTAMA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// create data permintaan bantuan
export const createBantuanUtama = (history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/admin/bantuan-utama", config);

    dispatch({
      type: GET_BANTUAN_UTAMA,
      payload: res.data,
    });

    dispatch(setAlert("Data bantuan utama berhasil dibuat", "success"));
    history.push("/admin/bantuan-utama");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: BANTUAN_UTAMA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// put data permintaan bantuan
export const insertBantuanUtama = (dataBantuanUtama, history) => async (
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
      "/admin/bantuan-utama",
      dataBantuanUtama,
      config
    );

    dispatch({
      type: UPDATE_BANTUAN_UTAMA,
      payload: res.data,
    });
    dispatch(setAlert("Data bantuan utama berhasil ditambahkan", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: BANTUAN_UTAMA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete data permintaan bantuan
export const deleteBantuanUtama = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/admin/bantuan-utama/${id}`);

    dispatch({
      type: UPDATE_BANTUAN_UTAMA,
      payload: res.data,
    });
    dispatch(setAlert("Data bantuan utama berhasil dihapus", "success"));
  } catch (err) {
    dispatch({
      type: BANTUAN_UTAMA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
