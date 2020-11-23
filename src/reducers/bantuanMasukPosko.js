import {
  GET_BANTUAN_MASUK,
  BANTUAN_MASUK_ERROR,
  CLEAR_BANTUAN_MASUK,
  UPDATE_BANTUAN_MASUK,
} from "../actions/types";

const initialState = {
  dataBantuanMasuk: null,
  semuaDataBantuanMasuk: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BANTUAN_MASUK:
    case UPDATE_BANTUAN_MASUK:
      return {
        ...state,
        dataBantuanMasuk: payload,
        loading: false,
        error: {},
      };
    case BANTUAN_MASUK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_BANTUAN_MASUK:
      return {
        ...state,
        dataBantuanMasuk: null,
        loading: false,
      };
    default:
      return state;
  }
}
