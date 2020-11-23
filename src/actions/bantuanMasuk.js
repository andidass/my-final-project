import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_BANTUAN_MASUK,
  BANTUAN_MASUK_ERROR,
  UPDATE_BANTUAN_MASUK,
} from "./types";

//get data bantuan masuk
export const getBantuanMasuk = () => async (dispatch) => {
  try {
    const res = await axios.get("/posko/bantuan-masuk/me");

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

    const res = await axios.post("/posko/bantuan-masuk", dataInit, config);

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

// create data bantuan-masuk
// export const createBantuanMasuk = (user, history) => async (dispatch) => {
//   try {
//     const config = {
//       header: {
//         "Content-Type": "application/json",
//       },
//     };

//     const res = await axios.post("posko/bantuan-masuk", config);

//     dispatch({
//       type: GET_BANTUAN_MASUK,
//       payload: res.data,
//     });

//     dispatch(setAlert("Data bantuan masuk posko berhasil dibuat", "success"));
//     history.push("/posko/data-bantuan-masuk");
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
//     }
//     dispatch({
//       type: BANTUAN_MASUK_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// put data bantuan masuk
// export const insertBantuanMasuk = (allData, history) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const res = await axios.put(
//       "/posko/bantuan-masuk/input-bantuan-masuk",
//       allData,
//       config
//     );

//     dispatch({
//       type: UPDATE_BANTUAN_MASUK,
//       payload: res.data,
//     });
//     dispatch(setAlert("Data bantuan masuk berhasil ditambahkan", "success"));
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
//     }
//     dispatch({
//       type: BANTUAN_MASUK_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
