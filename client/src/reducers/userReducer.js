import {
  USER_LOADING,
  GET_USER_PAGINATION,
  GET_USER_ID,
  CURRENT_PAGE_PAGINATION,
  GET_ALL_NAME_USER,
  GET_USER_PAGINATION_WITH_SEARCH
} from "../actions/types";

const initialState = {
  allUser: null,
  user: null,
  loading: false,
  total: null,
  current: 1,
  nameall: [],
  textSearch: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_USER_ID:
      return {
        ...state,
        user: action.payload
      };
    case GET_USER_PAGINATION:
      return {
        ...state,
        allUser: action.payload,
        total: action.payload.totalUser,
        loading: false
      };
    case CURRENT_PAGE_PAGINATION:
      return {
        ...state,
        current: action.payload
      };
    case GET_ALL_NAME_USER:
      return {
        ...state,
        nameall: action.payload
      };
    case GET_USER_PAGINATION_WITH_SEARCH:
      return {
        ...state,
        textSearch: action.payload.text,
        allUser: action.payload.user,
        total: action.payload.user.totalUser
      };
    default:
      return state;
  }
}
