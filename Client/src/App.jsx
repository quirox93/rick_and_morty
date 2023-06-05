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

  function login(userData) {
    const { email, password } = userData;
    axios(URL + `/login?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }
  useEffect(() => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Cards characters={characters} setCharacters={setCharacters} />}></Route>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}
export default App;
