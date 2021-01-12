import {
  GET_BANTUAN_KELUAR,
  BANTUAN_KELUAR_ERROR,
  CLEAR_BANTUAN_KELUAR,
  UPDATE_BANTUAN_KELUAR,
  GET_ALL_BANTUAN_KELUAR,
} from "../actions/types";

const initialState = {
  bantuanKeluar: null,
  semuaBantuanKeluar: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BANTUAN_KELUAR:
    case UPDATE_BANTUAN_KELUAR:
      return {
        ...state,
        bantuanKeluar: payload,
        loading: false,
        error: {},
      };
    case GET_ALL_BANTUAN_KELUAR:
      return {
        ...state,
        semuaBantuanKeluar: payload,
        loading: false,
        error: {},
      };
    case BANTUAN_KELUAR_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_BANTUAN_KELUAR:
      return {
        ...state,
        bantuanKeluar: null,
        loading: true,
      };
    default:
      return state;
  }
}
