import axios from "axios";
import {
  GET_FLIGHTS,
  GET_MY_FLIGHTS,
  SET_ERROR,
  SET_LOADING,
} from "../constants/action-types";

export function getFlights() {
  return function (dispatch) {
    dispatch({ type: SET_LOADING, payload: true });
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: GET_FLIGHTS, payload: response.data });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
}

export function getFlightsById() {
  return function (dispatch) {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const filteredPosts = response.data.filter(post => post.userId === 2)
        dispatch({ type: GET_MY_FLIGHTS, payload: filteredPosts });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
}
