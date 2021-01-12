import {
  GET_LAPORAN_BENCANA,
  GET_ALL_LAPORAN_BENCANA,
  UPDATE_LAPORAN_BENCANA,
  LAPORAN_BENCANA_ERROR,
  CLEAR_LAPORAN_BENCANA,
} from "../actions/types";

const initialState = {
  dataBencana: null,
  allDataBencana: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LAPORAN_BENCANA:
    case UPDATE_LAPORAN_BENCANA:
      return {
        ...state,
        dataBencana: payload,
        loading: false,
        error: {},
      };

    case GET_ALL_LAPORAN_BENCANA:
      return {
        ...state,
        allDataBencana: payload,
        loading: false,
        error: {},
      };

    case LAPORAN_BENCANA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_LAPORAN_BENCANA:
      return {
        ...state,
        dataBencana: null,
        loading: true,
      };
    default:
      return state;
  }
}
