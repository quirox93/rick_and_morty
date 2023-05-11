import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import s from "./Nav.module.css";

const Nav = ({ onSearch }) => (
  <nav className={s.container}>
    <div className={s.flexBox}>
      <h1 className={s.title}>Rick and Morty</h1>
    </div>

    <div className={s.flexBox}>
      <Link to="/home">
        <button className={s.iconButton}>
          <i className={s.materialIcons}>home</i>
        </button>
      </Link>
    </div>
    <div className={s.flexBox}>
      <Link to="/favorites">
        <button className={s.iconButton}>
          <h1>🤍</h1>
        </button>
      </Link>
    </div>
    <div className={s.flexBox}>
      <Link to="/about">
        <button className={s.iconButton}>
          <i className={s.materialIcons}>info</i>
        </button>
      </Link>
    </div>
  </nav>
);

export default Nav;
