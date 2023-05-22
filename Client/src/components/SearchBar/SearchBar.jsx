import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState([]);
  const handleChange = (event) => setId(event.target.value);
  const handleClick = () => {
    onSearch(id);
    return setId("");
  };
  const handleEnter = (event) => {
    event.key == "Enter" && handleClick();
  };
  return (
    <div className={s.searchBox}>
      <input
        onChange={handleChange}
        onKeyUp={handleEnter}
        className={s.searchInput}
        type="number"
        name=""
        placeholder="Buscar"
        value={id}
      ></input>
      <button onClick={handleClick} className={s.searchButton}>
        <i className={s.materialIcons}>search</i>
      </button>
    </div>
  );
};

export default SearchBar;
