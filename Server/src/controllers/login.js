const users = require("../utils/users");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || !password) return res.status(400).json({ error: "Faltan datos" });

    const response = {
      access: Boolean(users.find((x) => (x.email === email) & (x.password === password))),
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = login;
