import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import s from "./Detail.module.css";

const dict = {
  Alive: "Vivo",
  Dead: "Muerto",
  Human: "Humano",
  Male: "Masculino",
  Female: "Femenino",
  unknown: "?",
  "Earth (Replacement Dimension)": "Tierra (C-131)",
};

const translator = (string) =>
  dict[string] || string.replace("Earth", "Tierra");

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
  }, [id]);

  if (character.name)
    return (
      <div className={s.main}>
        <div>
          <h1>{character.name}</h1>
          <hr></hr>
          <h2>
            Estado: <i>{translator(character.status)}</i>
          </h2>
          <hr></hr>
          <h2>
            Especie: <i>{translator(character.species)}</i>
          </h2>
          <hr></hr>
          <h2>
            Género: <i>{translator(character.gender)}</i>
          </h2>
          <hr></hr>
          <h2>
            Origen: <i>{translator(character.origin.name)}</i>
          </h2>
        </div>
        <img className={s.img} src={character.image} alt={character.name} />
      </div>
    );
};

export default Detail;
