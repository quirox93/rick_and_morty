import Cards from "../Cards/Cards";
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(orderCards(e.target.value));
  };
  const handleFilter = (e) => dispatch(filterCards(e.target.value));

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <Cards characters={myFavorites} />;
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
