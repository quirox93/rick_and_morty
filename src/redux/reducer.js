import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initalState = {
  myFavorites: [],
  allCharacters: [],
};
const rootReducer = (state = initalState, { type, payload }) => {
  const compFn = (a, b) => (payload == "A" ? a.id - b.id : b.id - a.id);
  const filterComp = ({ gender }) => gender === payload;
  console.log(payload);
  const actions = {
    [ADD_FAV]: {
      ...state,
      myFavorites: [...state.allCharacters, payload],
      allCharacters: [...state.allCharacters, payload],
    },
    [REMOVE_FAV]: {
      ...state,
      myFavorites: state.allCharacters.filter(({ id }) => id != payload),
      allCharacters: state.allCharacters.filter(({ id }) => id != payload),
    },
    [FILTER]: { ...state, myFavorites: state.allCharacters.filter(filterComp) },
    [ORDER]: { ...state, myFavorites: [...state.allCharacters].sort(compFn) },
  };

  return actions[type] ?? { ...state };
};

export default rootReducer;
