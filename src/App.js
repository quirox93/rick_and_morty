import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const EMAIL = "quirox01@gmail.com";
  const PASSWORD = "test123";
  const navigate = useNavigate();
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
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
