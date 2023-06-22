import Cards from "../Cards/Cards";
import useFilter from "./useFilter";

const Favorites = () => {
  const { myFavorites, values, handler } = useFilter();

  return (
    <div>
      <select name="orderCards" value={values.orderCards} onChange={handler}>
        <option value="" disabled>
          Orden
        </option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select name="filterCards" value={values.filterCards} onChange={handler}>
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

export default Favorites;
