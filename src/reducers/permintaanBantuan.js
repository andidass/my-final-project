import {
  GET_PERMINTAAN_BANTUAN,
  PERMINTAAN_BANTUAN_ERROR,
  CLEAR_PERMINTAAN_BANTUAN,
  UPDATE_PERMINTAAN_BANTUAN,
} from "../actions/types";

const initialState = {
  permintaanBantuan: null,
  semuaPermintaanBantuan: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PERMINTAAN_BANTUAN:
    case UPDATE_PERMINTAAN_BANTUAN:
      return {
        ...state,
        permintaanBantuan: payload,
        loading: false,
        error: {},
      };
    case PERMINTAAN_BANTUAN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PERMINTAAN_BANTUAN:
      return {
        ...state,
        permintaanBantuan: null,
        loading: false,
      };
    default:
      return state;
  }
}
