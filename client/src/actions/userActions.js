import axios from "axios";
import {
  GET_ERRORS,
  GET_USER_PAGINATION,
  USER_LOADING,
  GET_USER_ID,
  CURRENT_PAGE_PAGINATION,
  GET_ALL_NAME_USER,
  GET_USER_PAGINATION_WITH_SEARCH
} from "./types";

// CREATE-NEW-USERS
export const createNewUser = (userData, reset) => dispatch => {
  axios
    .post("/api/users/create_user", userData)
    .then(user => {
      dispatch(getUserPagination());
      reset();
    })
    .catch(err => {
      console.log(err);
      if (err.response && err.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      }
    });
};

// GET-USER-PAGINATION
export const getUserPagination = (currentPage, textSearch) => dispatch => {
  currentPage = currentPage || 1;
  dispatch(userLoading());
  if (textSearch) {
    axios
      .post(`/api/users/search_user_pagination/${currentPage}`, { textSearch })
      .then(res =>
        dispatch({
          type: GET_USER_PAGINATION_WITH_SEARCH,
          payload: { user: res.data, text: textSearch }
        })
      )
      .catch(err => console.log(err));
  } else {
    axios
      .get(`/api/users/get_user_pagination/${currentPage}`)
      .then(res =>
        dispatch({
          type: GET_USER_PAGINATION,
          payload: res.data
        })
      )
      .catch(err => console.log(err));
  }
};

// GET-LOADING
export const userLoading = () => ({
  type: USER_LOADING
});

// DELETE-USER
export const deleteUser = id => dispatch => {
  axios
    .delete(`/api/users/delete/${id}`)
    .then(() => dispatch(getUserPagination()))
    .catch(err => console.log(err));
};

// GET-USER-ID
export const getUserId = id => dispatch => {
  axios
    .get(`/api/users/get_user/${id}`)
    .then(res =>
      dispatch({
        type: GET_USER_ID,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// UPDATE-USER-ID
export const updateUserId = (id, newData, history, current) => dispatch => {
  axios
    .put(`/api/users/update_user/${id}`, newData)
    .then(res => {
      history.push("/");
      dispatch(getUserPagination(current));
    })
    .catch(err => console.log(err));
};

// SET_CURRENT_PAGE_PAGINATION
export const setCurrentPagination = current => dispatch => {
  return dispatch({
    type: CURRENT_PAGE_PAGINATION,
    payload: current
  });
};

// GET_NAME_ALL_USER
export const getNameAllUser = () => dispatch => {
  axios
    .get("/api/users/get_all_name_user")
    .then(res =>
      dispatch({
        type: GET_ALL_NAME_USER,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
