const { User, Favorite } = require("./../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    const fav = await Favorite.findByPk(id);
    if (!fav) res.status(404).json({ message: "Personaje no encontrado." });
    await fav.destroy();

    const users = await User.findOne({
      where: { id: 1 },
      include: { model: Favorite, as: "Favorites" },
    });
    res.status(200).json(users.Favorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
