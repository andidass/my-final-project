import {
  GET_PENGUNGSI,
  PENGUNGSI_ERROR,
  CLEAR_PENGUNGSI,
  UPDATE_PENGUNGSI,
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
        loading: false,
      };
    default:
      return state;
  }
}
