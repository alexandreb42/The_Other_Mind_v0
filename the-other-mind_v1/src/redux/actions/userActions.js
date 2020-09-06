import axios from "axios";
import {
  CLEAR_ERRORS,
  LOADING_UI,
  LOADING_USER,
  SET_ERRORS,
  SET_UNAUTHENTICATED,
  SET_USER,
  SET_AUTHENTICATED,
} from "../types";

export const getUserData = (id) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`http://localhost:5000/api/auth/${id}`)
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("http://localhost:5000/api/auth/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      //   dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_AUTHENTICATED });
      history.push("/");
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
      //   dispatch({ type: SET_ERRORS, payload: err });
    });
};

export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("http://localhost:5000/api/auth/signup", newUserData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);

      //   dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
      //   dispatch({ type: SET_ERRORS, payload: err.response.data });
      dispatch({ type: SET_ERRORS, payload: err });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("IdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

const setAuthorizationHeader = (token) => {
  const IdToken = `Bearer ${token}`;
  localStorage.setItem("IdToken", IdToken);
  axios.defaults.headers.common["Authorization"] = IdToken;
};
