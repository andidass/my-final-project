import axios from "axios";
import { setAlert } from "./alert";
import { GET_FASILITASPOSKO, FASILITASPOSKO_ERROR } from "./types";

// get data fasilitas posko
export const getDataFasilitasPosko = () => async (dispatch) => {
  try {
    const res = await axios.get("/posko/fasilitas-posko/me");

    dispatch({
      type: GET_FASILITASPOSKO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FASILITASPOSKO_ERROR,
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
      type: GET_FASILITASPOSKO,
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

    // jika profile baru dibuat, redirect
    //   if (!edit) {
    //     history.push("/posko/data-posko");
    //   }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({
      type: FASILITASPOSKO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
