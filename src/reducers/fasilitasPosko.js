import {
  GET_FASILITAS_POSKO,
  UPDATE_FASILITAS_POSKO,
  FASILITAS_POSKO_ERROR,
  CLEAR_FASILITAS_POSKO,
  GET_ALL_FASILITAS_POSKO,
} from "../actions/types";

const initialState = {
  fasilitasPosko: null,
  allFasilitasPosko: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FASILITAS_POSKO:
    case UPDATE_FASILITAS_POSKO:
      return {
        ...state,
        fasilitasPosko: payload,
        loading: false,
        error: {},
      };

    case GET_ALL_FASILITAS_POSKO:
      return {
        ...state,
        allFasilitasPosko: payload,
        loading: false,
        error: {},
      };

    case FASILITAS_POSKO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_FASILITAS_POSKO:
      return {
        ...state,
        fasilitasPosko: null,
        loading: false,
      };
    default:
      return state;
  }
}
