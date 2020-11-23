import {
  GET_LAPORAN_HARIAN,
  UPDATE_LAPORAN_HARIAN,
  LAPORAN_HARIAN_ERROR,
  CLEAR_LAPORAN_HARIAN,
} from "../actions/types";

const initialState = {
  laporanHarian: null,
  allLaporanHarian: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LAPORAN_HARIAN:
    case UPDATE_LAPORAN_HARIAN:
      return {
        ...state,
        laporanHarian: payload,
        loading: false,
        error: {},
      };

    case LAPORAN_HARIAN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_LAPORAN_HARIAN:
      return {
        ...state,
        laporanHarian: null,
        loading: false,
      };
    default:
      return state;
  }
}
