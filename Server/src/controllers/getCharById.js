const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const dict = {
  Alive: "Vivo",
  Dead: "Muerto",
  Human: "Humano",
  Male: "Masculino",
  Female: "Femenino",
  unknown: "?",
  Genderless: "Sin género",
  "Mythological Creature": "Criatura mitológica",
  "Earth (Replacement Dimension)": "Tierra (C-131)",
};
const translator = (string) => dict[string] || string.replace("Earth", "Tierra");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(URL + id);

    const char = {
      id: data.id,
      status: translator(data.status),
      name: translator(data.name),
      species: translator(data.species),
      gender: translator(data.gender),
      origin: translator(data.origin.name),
      image: translator(data.image),
    };
    res.status(200).json(char);
  } catch (error) {
    if (error.response.status === 404) {
      res.status(404).send("Not found");
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = getCharById;
