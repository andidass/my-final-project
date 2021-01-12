import {
  GET_BANTUAN_UTAMA,
  BANTUAN_UTAMA_ERROR,
  CLEAR_BANTUAN_UTAMA,
  UPDATE_BANTUAN_UTAMA,
} from "../actions/types";

const initialState = {
  bantuanUtama: null,
  semuaBantuanUtama: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BANTUAN_UTAMA:
    case UPDATE_BANTUAN_UTAMA:
      return {
        ...state,
        bantuanUtama: payload,
        loading: false,
        error: {},
      };
    case BANTUAN_UTAMA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_BANTUAN_UTAMA:
      return {
        ...state,
        bantuanUtama: null,
        loading: true,
      };
    default:
      return state;
  }
}
