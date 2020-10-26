import axios from "axios";
import { setAlert } from "./alert";
import { GET_PENGUNGSI, PENGUNGSI_ERROR } from "./types";

//get pengungsi data
export const getPengungsi = () => async (dispatch) => {
  try {
    const res = await axios.get("/posko/data-pengungsi");

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

// create or update data pengungsi
export const insertPengungsi = (pengungsi, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/posko/data-pengungsi", pengungsi, config);

    dispatch({
      type: GET_PENGUNGSI,
      payload: res.data,
    });

    dispatch(setAlert("Pengungsi berhasil ditambahkan", "success"));
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
