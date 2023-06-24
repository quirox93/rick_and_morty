import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const URL = import.meta.env.VITE_BACKEND_URL;
function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        `${URL}/rickandmorty/login?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
      if (!access) window.alert("Usuario o contraseña incorrecta.");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {access && <Nav />}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        {!access && <Route path="/*" element={<Form login={login} />}></Route>}

        {access && (
          <>
            <Route
              path="/home"
              element={
                <Cards
                  characters={characters}
                  access={access}
                  setCharacters={setCharacters}
                />
              }
            ></Route>
            <Route path="detail/:id" element={<Detail />}></Route>
            <Route
              path="/favorites"
              element={<Favorites access={access} />}
            ></Route>
            <Route path="/about" element={<About />}></Route>
          </>
        )}
      </Routes>
    </div>
  );
}
export default App;
