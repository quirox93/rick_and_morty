const server = require("./src/server");
const { conn } = require("./src/DB_connection");

conn.sync({ force: false }).then(() => {
  server.listen(3000, () => {
    console.log("Server raised");
  });
});
