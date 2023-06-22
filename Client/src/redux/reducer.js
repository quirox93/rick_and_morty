import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initalState = {
  myFavorites: [],
  allCharacters: [],
};
const rootReducer = (state = initalState, { type, payload }) => {
  const sortFn = (a, b) => (payload === "A" ? a.id - b.id : b.id - a.id);
  const filterFn = ({ gender }) => gender === payload;
  const all = state.allCharacters;

  const actions = {
    [ADD_FAV]: {
      ...state,
      myFavorites: payload,
      allCharacters: payload,
    },
    [REMOVE_FAV]: {
      ...state,
      myFavorites: payload,
      allCharacters: payload,
    },
    [FILTER]: { ...state, myFavorites: all.filter(filterFn) },
    [ORDER]: { ...state, myFavorites: [...all].sort(sortFn) },
  };

  return actions[type] ?? { ...state };
};

export default rootReducer;
