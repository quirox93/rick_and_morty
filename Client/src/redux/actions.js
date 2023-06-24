export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

import axios from "axios";
const URL = import.meta.env.VITE_BACKEND_URL;
// ACTION | addFav
export const addFav = (character) => {
  const endpoint = URL + "/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      console.log(data);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeFav = (access, id) => {
  const endpoint = URL + "/rickandmorty/fav/" + access + "/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (ord) => {
  return { type: ORDER, payload: ord };
};

export default { addFav, removeFav, filterCards, orderCards };
