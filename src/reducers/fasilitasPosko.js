import {
  GET_FASILITASPOSKO,
  UPDATE_FASILITASPOSKO,
  FASILITASPOSKO_ERROR,
  CLEAR_FASILITASPOSKO,
} from "../actions/types";

const initialState = {
  fasilitasPosko: null,
  semuaFasilitasPosko: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FASILITASPOSKO:
    case UPDATE_FASILITASPOSKO:
      return {
        ...state,
        fasilitasPosko: payload,
        loading: false,
        error: {},
      };

    case FASILITASPOSKO_ERROR:
      return {
        ...state,
        error: payload,
        error: {},
      };
    case CLEAR_FASILITASPOSKO:
      return {
        ...state,
        fasilitasPosko: null,
        loading: false,
      };
    default:
      return state;
  }
}
