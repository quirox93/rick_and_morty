const { User } = require("./../DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Faltan datos" });

    const [user, created] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        password: password,
      },
    });

    if (created) return res.status(200).json(user);

    return res.status(200).json({ message: "Usuario ya existente" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
