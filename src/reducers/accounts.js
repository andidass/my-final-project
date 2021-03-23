import {
  GET_ALL_ACCOUNTS_PETUGAS,
  GET_ALL_ACCOUNTS_POS,
  ACCOUNTS_PETUGAS_ERROR,
  ACCOUNTS_POS_ERROR,
} from "../actions/types";

const initialState = {
  accounts: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_ACCOUNTS_PETUGAS:
    case GET_ALL_ACCOUNTS_POS:
      return {
        ...state,
        accounts: payload,
        loading: false,
        error: {},
      };
    case ACCOUNTS_PETUGAS_ERROR:
    case ACCOUNTS_POS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
