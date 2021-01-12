import {
  GET_PENGUNGSI,
  PENGUNGSI_ERROR,
  CLEAR_PENGUNGSI,
  UPDATE_PENGUNGSI,
  GET_ALL_PENGUNGSI,
} from "../actions/types";

const initialState = {
  pengungsi: null,
  semuaPengungsi: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PENGUNGSI:
    case UPDATE_PENGUNGSI:
      return {
        ...state,
        pengungsi: payload,
        loading: false,
        error: {},
      };
    case GET_ALL_PENGUNGSI:
      return {
        ...state,
        semuaPengungsi: payload,
        loading: false,
        error: {},
      };
    case PENGUNGSI_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PENGUNGSI:
      return {
        ...state,
        pengungsi: null,
        loading: true,
      };
    default:
      return state;
  }
}
