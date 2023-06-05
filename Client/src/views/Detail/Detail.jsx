import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import s from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/characters/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
  }, [id]);

  if (character.name)
    return (
      <div className={s.main}>
        <div>
          <h1>{character.name}</h1>
          <hr></hr>
          <h2>
            Estado: <i>{character.status}</i>
          </h2>
          <hr></hr>
          <h2>
            Especie: <i>{character.species}</i>
          </h2>
          <hr></hr>
          <h2>
            Género: <i>{character.gender}</i>
          </h2>
          <hr></hr>
          <h2>
            Origen: <i>{character.origin}</i>
          </h2>
        </div>
        <img className={s.img} src={character.image} alt={character.name} />
      </div>
    );
};

export default Detail;
