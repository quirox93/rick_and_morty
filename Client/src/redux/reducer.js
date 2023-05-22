import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initalState = {
  myFavorites: [],
  allCharacters: [],
};
const rootReducer = (state = initalState, { type, payload }) => {
  const sortFn = (a, b) => (payload === "A" ? a.id - b.id : b.id - a.id);
  //const sortFn = (a, b) => (a.id - b.id) * -(payload === "A");
  const filterFn = ({ gender }) => gender === payload;
  const all = state.allCharacters;

  const actions = {
    [ADD_FAV]: {
      ...state,
      myFavorites: [...all, payload],
      allCharacters: [...all, payload],
    },
    [REMOVE_FAV]: {
      ...state,
      myFavorites: all.filter(({ id }) => id != payload),
      allCharacters: all.filter(({ id }) => id != payload),
    },
    [FILTER]: { ...state, myFavorites: all.filter(filterFn) },
    [ORDER]: { ...state, myFavorites: [...all].sort(sortFn) },
  };

  return actions[type] ?? { ...state };
};

export default rootReducer;
