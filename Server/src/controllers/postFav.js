const { Favorite, User } = require("./../DB_connection");

const postFavorite = async (req, res) => {
  try {
    const { access, id, name, status, image, species, gender } = req.body;
    if (!access || !id || !name || !status || !image || !species || !gender)
      return res.status(401).json({ message: "Faltan datos" });

    const user = await User.findOne({ where: { id: access } });

    const [favorite] = await Favorite.findOrCreate({
      where: {
        id: id,
      },
      defaults: {
        name,
        status,
        image,
        species,
        gender,
      },
    });
    await favorite.addUsers([user.id]);
    
    const users = await User.findOne({
      where: { id: access },
      include: { model: Favorite, as: "Favorites" },
    });
    return res.status(200).json(users.Favorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFavorite;
