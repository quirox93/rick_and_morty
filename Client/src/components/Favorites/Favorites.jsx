import Cards from "../Cards/Cards";
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const [orderValue, setOrderValue] = useState("");
  const [genderValue, setgenderValue] = useState("");
  const handleOrder = (e) => {
    setgenderValue("");
    setOrderValue(e.target.value);
    dispatch(orderCards(e.target.value));
  };
  const handleFilter = (e) => {
    setOrderValue("");
    setgenderValue(e.target.value);
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <select value={orderValue} onChange={handleOrder}>
        <option value="" disabled>
          Orden
        </option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select value={genderValue} onChange={handleFilter}>
        <option value="" disabled>
          Género
        </option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Sin género">Sin genero</option>
        <option value="Desconocido">Desconocido</option>
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
