let myFavorites = [];

const postFav = async (req, res) => {
  const { body } = req;
  try {
    if (!myFavorites.find((x) => x.id === body.id)) myFavorites.push(body);
    res.status(201).json(myFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send("Faltan datos");
    myFavorites = myFavorites.filter((x) => x.id != id);
    res.status(200).json(myFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postFav, deleteFav };
