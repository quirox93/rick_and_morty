import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

function App() {
  //functions
  const onClose = (charId) => {
    let newCharacters = characters.filter(({ id }) => id !== charId);
    setCharacters(newCharacters);
    if (margin < 175 * -~~((newCharacters.length - 1) / 4))
      setMargin(175 * -~~((newCharacters.length - 1) / 4));
  };
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          if (characters.find(({ id }) => id == data.id))
            window.alert("¡Ya existe el personaje!");
          else {
            let newCharacters = [...characters, data];
            setCharacters((oldChars) => [...oldChars, data]);
            setMargin(175 * -~~((newCharacters.length - 1) / 4));
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };
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

  //States
  const [characters, setCharacters] = useState([]);
  const [margin, setMargin] = useState(0);
  const [rDisplay, setRDisplay] = useState("None");
  const [lDisplay, setLDisplay] = useState("None");

  //Margin update
  useEffect(() => {
    if (margin != 175 * -~~((characters.length - 1) / 4)) setRDisplay("Block");
    else setRDisplay("None");
    if (margin < 0) setLDisplay("Block");
    else setLDisplay("None");
  }, [margin]);

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={
            <Cards characters={characters} onClose={onClose} margin={margin} />
          }
        ></Route>
        <Route
          path="/"
          element={
            <Cards characters={characters} onClose={onClose} margin={margin} />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
      <div className="buttonContainer">
        <div>
          <button
            className="button-55"
            onClick={left}
            style={{ display: lDisplay }}
          >
            ◄
          </button>
        </div>
        <div>
          <button
            className="button-55"
            onClick={rigth}
            style={{ display: rDisplay }}
          >
            ►
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
