import Card from "../Card/Card";
import s from "./Cards.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";
const URL = import.meta.env.VITE_BACKEND_URL;
const Cards = ({ characters, setCharacters }) => {
  //functions
  const onClose = (charId) => {
    let newCharacters = characters.filter(({ id }) => id !== charId);
    setCharacters(newCharacters);
    if (margin < 175 * -~~((newCharacters.length - 1) / 4)) setMargin(175 * -~~((newCharacters.length - 1) / 4));
  };
  const onSearch = (id) => {
    axios(`${URL}/rickandmorty/characters/${id}`).then(({ data }) => {
      if (data.name) {
        if (characters.find(({ id }) => id == data.id)) window.alert("¡Ya existe el personaje!");
        else {
          let newCharacters = [...characters, data];
          setCharacters((oldChars) => [...oldChars, data]);
          setMargin(175 * -~~((newCharacters.length - 1) / 4));
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };
  //States

  const [margin, setMargin] = useState(0);
  const [rDisplay, setRDisplay] = useState("None");
  const [lDisplay, setLDisplay] = useState("None");

  //Margin update
  useEffect(() => {
    if (margin != 175 * -~~((characters.length - 1) / 4)) setRDisplay("Block");
    else setRDisplay("None");
    if (margin < 0) setLDisplay("Block");
    else setLDisplay("None");
  }, [characters.length, margin]);
  const rigth = () => {
    let newValor = margin - 175;
    if (175 * -~~((characters.length - 1) / 4) > newValor) return;
    setMargin(newValor);
  };
  const left = () => {
    let newValor = margin + 175;
    if (newValor > 0) return;
    setMargin(newValor);
  };

  return (
    <div className={s.container}>
      <div className={s.cardContainer} style={{ marginLeft: margin + "vw" }}>
        {characters.map((e, i) => (
          <div key={i}>
            <Card
              id={e.id}
              name={e.name}
              status={e.status}
              species={e.species}
              gender={e.gender}
              image={e.image}
              onClose={() => onClose(e.id)}
            />
          </div>
        ))}
      </div>

      <div className={s.buttonContainer}>
        <div>
          <button className="button-55" onClick={left} style={{ display: lDisplay }}>
            ◄
          </button>
        </div>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div>
          <button className="button-55" onClick={rigth} style={{ display: rDisplay }}>
            ►
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
